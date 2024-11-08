//- ID (PK, ObjectId)
//- Date (date time)
//- Starting Hour (int)
//- Ending Hour (int)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shiftmentSchema = new Schema({
    Date_time : Date,
    Starting_Hour: Number,
    Ending_Hour: Number
},
{versionKey: false}
); 

module.exports = mongoose.model('shift', shiftmentSchema);