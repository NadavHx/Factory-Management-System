// employee
//- ID (PK, Objectid)
//- First Name (string)

//- Last Name (string)
//- Start Work Year (int)
//- DepartmentID (reference to department id)
const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    First_Name : String,
    Last_Name: String,
    Start_Work_Year:Number ,
    DepartmentID:  { type: ObjectId, ref: 'department' }, 
    Shifts: [{ type: ObjectId, ref: 'shift' }]  
},
{versionKey: false}
); 

module.exports = mongoose.model('employee', employeeSchema);


