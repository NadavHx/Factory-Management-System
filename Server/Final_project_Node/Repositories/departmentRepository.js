const departmentModel=require("../Models/departmentModel");

const getallDepartments = async () => {
    return await departmentModel.find({});
}
const getDepartmentById = async (id) => {
    return await departmentModel.findById(id);
}
const updateDepartment = async (id, obj) => {
    return await departmentModel.findByIdAndUpdate(id, obj);
  };

  const addDepartment = async (obj) => {
    const dem = new departmentModel(obj);
    return await dem.save()
  };

  const deleteDepartment= async(id) => {
    return  await departmentModel.findByIdAndDelete(id);
  };

module.exports= {getallDepartments,getDepartmentById,updateDepartment,addDepartment,deleteDepartment};