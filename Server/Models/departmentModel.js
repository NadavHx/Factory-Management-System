// department
//- ID (PK, ObjectId)
//- Name (string)
//- Manager ( reference to emloyee id)
const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    Name : String,
    Manager: { type: ObjectId, ref: 'employee' }  
},
{versionKey: false}
); 

module.exports = mongoose.model('department', departmentSchema);