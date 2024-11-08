const exprss = require('express');

const router= exprss.Router();

const shiftService= require("../Services/shiftService");


router.get("/",async(req,res) => {
    const shifts=await shiftService.getallShifts();
    return res.json(shifts);
})
router.get("/:id",async(req,res) => {
  const { id } = req.params;
  const shift=await shiftService.getShiftById(id);
  return res.json(shift);
})
router.get("/category/shiftPage",async(req,res) => {
  const shifts=await shiftService.getallShiftspage();
 return res.json(shifts);
})

router.get("/getNotShiftedEmployeebyid/:id",async(req,res) => {
  const { id } = req.params;
  const employees=await shiftService.getNotShiftedEmployeebyid(id);
 return res.json(employees);
})

// Add a new Shift
router.post('/', async (req, res) => {
    try {
      const obj = req.body;
      const result = await shiftService.addShift(obj);
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
      const result = await shiftService.updateShift(id, obj);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  });
  router.patch('/category/assign/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const obj = req.body;
      const result = await shiftService.updateEmployeeShift(id, obj);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  });

module.exports = router;