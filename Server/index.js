const express = require('express');
const cors = require('cors');
require("./config/database");
const checkToken = require('./Controllers/checkTokenController'); // Import the token validation middleware




const app = express();
const port = 8081;
app.use(cors());
app.use(express.json());

const userController = require('./Controllers/userController');
const employeeController = require('./Controllers/employeeController');
const shiftController = require('./Controllers/shiftController');
const departmentController = require('./Controllers/departmentController');
const authController = require('./Controllers/authController');

app.use('/employee',checkToken, employeeController);
app.use('/shift',checkToken, shiftController);
app.use('/department',checkToken, departmentController);

app.use('/user',checkToken, userController);
app.use('/auth', authController);






app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});