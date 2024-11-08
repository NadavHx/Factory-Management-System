const departmentRepo=require("../Repositories/departmentRepository");
const employeeRepo=require("../Repositories/employeeRepository");

const getallDepartments = async () => {
    const departments= await departmentRepo.getallDepartments();
    return departments;
}
const getDepartmenById= async (id) => {
  const department =await departmentRepo.getDepartmentById(id);
  const Employees= await getallEmployees();
  let Emps=Employees.filter((employee)=>employee.DepartmentID==department._id);
     let Manager=Employees.find((employee)=>employee.id==department.Manager);
     let finaldepartments= (
              {
                  "id":department._id,
                  "Name":department.Name,
                  "Manager":Manager,
                  "Employees":Emps
              }
          )
  return finaldepartments
}
const getallDepartmentsdata = async () => {
  const departments= await getallDepartments();
  let finaldepartments=[];
  const Employees= await getallEmployees();
  for (const deprment of departments) {
     let Emps=Employees.filter((employee)=>employee.DepartmentID==deprment.id);
     let Manager=Employees.find((employee)=>employee.id==deprment.Manager);
     finaldepartments.push(
              {
                  "id":deprment.id,
                  "Name":deprment.Name,
                  "Manager":Manager,
                  "Employees":Emps
              }
          )
  }
  return finaldepartments;
};

const updateDepartment = (id, obj) => {
    return departmentRepo.updateDepartment(id, obj);
  };

  const addDepartment = (obj) => {
    return departmentRepo.addDepartment(obj);
  };

  const deleteDepartment = async (id) => {
    let employees=await getallEmployees();
    employees.forEach(employee => {
      if (employee.DepartmentID.toString() === id) {
        employeeRepo.deleteEmployee(employee.id)
      }
    });
    return departmentRepo.deleteDepartment(id);
  };
  const getallEmployees = async () => {
    const employees= await employeeRepo.getallEmployees();
    return employees;
  };

module.exports = {getallDepartments,getDepartmenById,getallDepartmentsdata,updateDepartment,addDepartment,deleteDepartment};