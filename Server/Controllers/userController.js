const exprss = require('express');

const router= exprss.Router();

const userService= require("../Services/userService");


router.get("/",async(req,res) => {
    const users=await userService.getallUsers();
    return res.json(users);
})

router.get("/userPage/users",async(req,res) => {
    const users=await userService.getAllUsersForPage();
    return res.json(users);
})

router.get("/placeHolder/users",async(req,res) => {
    try {
        const users=await userService.getallUsersFromPlaceHolder();
        return res.json(users);
    } catch (error) {
        res.json(error);
  }
})


module.exports = router;

