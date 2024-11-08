// user
//- ID (PK, ObjectId)
// Full Name (string)
// Num Of Actions (int)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    full_Name : String,
    Num_Of_Actions: Number
},
{versionKey: false}
); 

module.exports = mongoose.model('user', userSchema);