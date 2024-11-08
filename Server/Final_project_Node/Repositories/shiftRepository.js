const shiftModel=require("../Models/shiftModel");

const getallShifts = async () => {
    return await shiftModel.find({});
}

const getShiftById = async (id) => {
    return await shiftModel.findById(id);
}

const updateShift = async (id, obj) => {
    return await shiftModel.findByIdAndUpdate(id, obj);
  };

  const addShift = async (obj) => {
    const sht=new shiftModel(obj);
    return await sht.save()
  };


module.exports= {getallShifts,getShiftById,updateShift,addShift};