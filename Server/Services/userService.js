const userRepo=require("../Repositories/userRepository");
const userplaceholderRepo=require("../Repositories/userplaceholderRepsitory");



const userActionRepo=require("../Repositories/userActionReposity");


const getAllUsersForPage =  async () => {
  user_action=await getallActionUsers();
  users= await getallUsers();
  finaluserlist=[];
    users.forEach(user => {
      arr_actions=user_action.actions.filter(us=>us.id==user.id&&isToday(new Date(us.date)));
      finaluserlist.push({
        "id":user.id,
        "name":user.full_Name,
        "maxActions":user.Num_Of_Actions,
        "actionsAllowed":(user.Num_Of_Actions-arr_actions.length)
      });
    });
  return finaluserlist
};



const getallUsers = async () => {
    const users= await userRepo.getallUsersFormDataBase();
    return users;
}
const getallActionUsers = async () => {
  return await userActionRepo.getAllUsers();
}

const getUserById= async (id) => {
  const shift =await userRepo.getUserById(id);
  return shift;
}



const getallUsersFromPlaceHolder = async () => {
  let { data: users } = await userplaceholderRepo.getAllUsers();
   users = users.map(users => {
    return { username: users.username, email: users.email,name:users.name };
  });
  return users;
}

const isToday = (date) => {
  const today = new Date();
  return date.getFullYear() === today.getFullYear() &&
         date.getMonth() === today.getMonth() &&
         date.getDate() === today.getDate();
};

const checkUserFinshActionToday= async (user_id) =>{
  let users_action = await getallActionUsers();
  const userdata=await getUserById(user_id)
  arr_actions=users_action.actions.filter(us=>us.id==user_id&&isToday(new Date(us.date)));
  let finsh=await adduserAction(user_id);
  if((userdata.Num_Of_Actions-arr_actions.length)==0){ 
    return true; 
  }
  else{  
    return false; 
  }
}


const adduserAction = async (user_id) => {
  let users_action = await getallActionUsers();
  const userdata=await getUserById(user_id)
  arr_actions=users_action.actions.filter(us=>us.id==user_id&&isToday(new Date(us.date)));
  let today = new Date();
  const userAction={
    "id":user_id, "maxActions":userdata.Num_Of_Actions, "date": today.toLocaleDateString(),"actionAllowd": (userdata.Num_Of_Actions-arr_actions.length-1)
  };
  users_action.actions.push(userAction);
  userActionRepo.setusers(users_action);
  return "ok"; 
};

module.exports = {getallUsers,getAllUsersForPage,adduserAction,checkUserFinshActionToday,getallUsersFromPlaceHolder};

