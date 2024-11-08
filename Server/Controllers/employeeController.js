const exprss = require('express');

const router= exprss.Router();

const employeeService= require("../Services/employeeService");


router.get("/",async(req,res) => {
    const employees=await employeeService.getallEmployees();
    return res.json(employees);
})

router.get("/:id",async(req,res) => {
  const { id } = req.params;
  const employee=await employeeService.getEmployeeById(id);
  return res.json(employee);
})

router.get("/category/employeePage",async(req,res) => {
    const employees=await employeeService.getallEmployeesdata();
   return res.json(employees);
})

router.post('/', async (req, res) => {
    try {
      const obj = req.body;
      const result = await employeeService.addeEmployee(obj);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  });
  
  // Update a Shift
  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const obj = req.body;
      const result = await employeeService.updateEmployee(id, obj);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  });


// Delete a employee
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await employeeService.deleteeEmployee(id);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  });


module.exports = router;