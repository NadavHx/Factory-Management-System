const express = require('express');
const jwt = require('jsonwebtoken');
const userService= require("../Services/userService");
const key = require('../Config/secret_key');


const router = express.Router();
router.use(express.json());


router.post('/login', async(req, res) => {
  const { username, email } = req.body;
  let users=await userService.getallUsersFromPlaceHolder();
  let arr = users.filter(user => user.username === username && user.email === email);
  let usersDataBase= await userService.getallUsers();
  let arr2 = usersDataBase.filter(user => user.full_Name === arr[0].name);
  if (arr.length === 0) {
    return res.status(400).json({ error: 'Invalid username or email' });
  }

  // if 'username' and 'password' are exist in the DB
  if (true) {
    const userFullName= arr[0].name;
    const userId =arr2[0]._id.toString();
    const SECRET_KEY = key;
    const token = jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });
    
    res.status(200).json({ token,"userFullName":userFullName });
  }
});





module.exports = router;