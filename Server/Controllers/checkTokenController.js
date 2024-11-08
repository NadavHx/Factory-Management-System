const jwt = require('jsonwebtoken');
const key = require('../Config/secret_key');
const userService = require("../Services/userService");
const action_sting=["/employee/category/employeePage","/department/category/departmenPage","/shift/category/shiftPage"]
// Token validation middleware
const checkToken = async (req, res, next) => {
  const token = req.headers['x-access-token']; // Extract token from the request headers
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, key);
    req.userId = decoded.id; // Store decoded user information in request (optional)
    if(action_sting.includes(req.originalUrl)||req.method=="PATCH"||req.method=="DELETE"||req.method=="POST"){
      const finshActionForToday = await userService.checkUserFinshActionToday(req.userId); // Check actions limit for today
      if (finshActionForToday) {
        return res.status(401).json({ message: 'You have reached the maximum actions allowed for today' });
      }
    }
    

    next(); // Proceed to the next middleware or route handler if action limit is not reached
  } catch (err) {
    console.error("Error in token verification or action check:", err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = checkToken;
