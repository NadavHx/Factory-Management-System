const userModel=require("../Models/userModel");

const getallUsersFormDataBase = async () => {
    return await userModel.find({});
}
const getUserById = async (id) => {
    return await userModel.findById(id);
}

module.exports= {getallUsersFormDataBase,getUserById};