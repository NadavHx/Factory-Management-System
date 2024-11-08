const employeeRepo=require("../Repositories/employeeRepository");
const shiftRepo=require("../Repositories/shiftRepository");
const departmentRepo=require("../Repositories/departmentRepository");

const getallEmployees = async () => {
    const employees= await employeeRepo.getallEmployees();
    return employees;
};

const getEmployeeById= async (id) => {
    const shifts= await getallShifts();
    const employee =await employeeRepo.getEmployeeById(id);
    const shiftfinal = employee.Shifts.map(employee_shift => shifts.find(shf => shf.id == employee_shift)).filter(Boolean);
    const department= await getDepartmentById(employee.DepartmentID.toString());
    const finalemployee=(
        {
            "id":employee.id,
            "First_Name":employee.First_Name,
            "Last_Name":employee.Last_Name,
            "Start_Work_Year":employee.Start_Work_Year,
            "department":department,
            "Shifts":shiftfinal
        }
    )
    return finalemployee;
}

const getallEmployeesdata = async () => {
    const shifts= await getallShifts();
    const employees = await getallEmployees();
    let finalEmployees=[]
    for (const employee  of employees ) {
        const shiftfinal = employee.Shifts.map(employee_shift => shifts.find(shf => shf.id == employee_shift)).filter(Boolean);
        const department= await getDepartmentById(employee.DepartmentID.toString());
            finalEmployees.push(
                {
                    "id":employee .id,
                    "First_Name":employee .First_Name,
                    "Last_Name":employee .Last_Name,
                    "Start_Work_Year":employee .Start_Work_Year,
                    "department":department,
                    "Shifts":shiftfinal
                }
            )
        
    }
    return finalEmployees;
};

const updateEmployee = async (id, obj) => {
    const { Shifts } = obj;
    if (Shifts) {
      const employee = await employeeRepo.getEmployeeById(id);
      const updatedShifts = [...employee.Shifts.filter(shift => shift.toString() !== Shifts.toString()), Shifts.toString()];
      return employeeRepo.updateEmployee(id, { Shifts: updatedShifts });
    }
    return employeeRepo.updateEmployee(id, obj);
  };


  
  const addeEmployee = async (obj) => {
    return await employeeRepo.addEmployee(obj);
  };

  
  const deleteeEmployee = async (id)  => {
    const emp= await getEmployeeById(id)
    const department= await getDepartmentById(emp.DepartmentID)
    if(department.Manager==id){
        department.Manager=null
        await  updateDepartment(department.id,department);
    }
     return await employeeRepo.deleteEmployee(id);
  };

const getallShifts = async () => {
    const shifts= await shiftRepo.getallShifts();
    return shifts;
}

const updateDepartment = async (id, obj) => {
    return await departmentRepo.updateDepartment(id, obj);
  };

const getDepartmentById= async (id) => {
    const department =await departmentRepo.getDepartmentById(id);
    return department;
}


  

module.exports = {getallEmployees,getEmployeeById,getallEmployeesdata,updateEmployee,addeEmployee,deleteeEmployee};