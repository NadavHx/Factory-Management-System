const employeeModel=require("../Models/employeeModel");
const getallEmployees = async () => {
    return await employeeModel.find({});
}

const getEmployeeById = async (id) => {
  return await employeeModel.findById(id);
}

const updateEmployee = async   (id, obj) => {
    return  await  employeeModel.findByIdAndUpdate(id, obj);
  };

  const addEmployee = async  (obj) => {
    const emp=new employeeModel(obj);
    return await  emp.save()
  };
  // Delete
const deleteEmployee = async  (id) => {
    return await   employeeModel.findByIdAndDelete(id);
  };



  
module.exports= {getallEmployees,getEmployeeById,updateEmployee,addEmployee,deleteEmployee};