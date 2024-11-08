const exprss = require('express');

const router= exprss.Router();

const departmentService= require("../Services/departmentService");
const userService = require("../Services/userService");


router.get("/",async(req,res) => {
    const departments=await departmentService.getallDepartments();
    return res.json(departments);
})

router.get("/:id",async(req,res) => {
  const { id } = req.params;
  const department=await departmentService.getDepartmenById(id);
  return res.json(department);
})

router.get("/category/departmenPage",async(req,res) => {
  const departments=await departmentService.getallDepartmentsdata();
 return res.json(departments);
})
// Add a new Shift
router.post('/', async (req, res) => {
    try {
      const obj = req.body;
      const result = await departmentService.addDepartment(obj);
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
      const result = await departmentService.updateDepartment(id, obj);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  });


// Delete a employee
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await departmentService.deleteDepartment(id);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  });

module.exports = router;