const shiftRepo=require("../Repositories/shiftRepository");
const employeeRepo=require("../Repositories/employeeRepository");

const getallShifts = async () => {
    const shifts= await shiftRepo.getallShifts();
    return shifts;
}
const getShiftById= async (id) => {
  const shift =await shiftRepo.getShiftById(id);
  return shift;
}
const getNotShiftedEmployeebyid= async (id) => {
  const shiftid =id;
  employeeNotInShift=[]
  const employees =await getallEmployees()
  employees.forEach(employee =>{
    const exists = employee.Shifts.includes(id);
    if(!exists){
      employeeNotInShift.push(employee);
    }
  });
  return employeeNotInShift;
}

const getallShiftspage = async () => {
  const employees =await getallEmployees()
  const shifts= await getallShifts();
  let shiftfinal=[]
  shifts.forEach (shift => {
    let employeeInShift=employees.filter((employee)=>employee.Shifts.some((s)=>s.toString()==shift.id));
    if(employeeInShift){
      shiftfinal.push(
        {
        "id":shift.id,
        "Date_time":shift.Date_time,
        "Starting_Hour": shift.Starting_Hour,
        "Ending_Hour":shift.Ending_Hour,
        "Employees":employeeInShift
        });
    }
  });
  return shiftfinal;
}
const updateEmployeeShift = async (id, obj) => {
  let { Shifts }= obj
      const employee =await employeeRepo.getEmployeeById(id);
      let addshift={
          Shifts: []
      }
      for (const shift of employee.Shifts) {
          if (shift.toString()!=Shifts.toString()) {
              addshift.Shifts.push(shift.toString());
          }
      }
      addshift.Shifts.push(Shifts.toString())
      return employeeRepo.updateEmployee(id, addshift);
  }




const updateShift = async (id, obj) => {
    return shiftRepo.updateShift(id, obj);
  };

  const addShift = async (obj) => {
    return shiftRepo.addShift(obj);
  };

  const getallEmployees = async () => {
    const employees= await employeeRepo.getallEmployees();
    return employees;
};
module.exports = {getallShifts,getShiftById,getNotShiftedEmployeebyid,getallShiftspage,updateShift,updateEmployeeShift,addShift};