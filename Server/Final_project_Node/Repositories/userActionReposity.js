const jf = require('jsonfile');

const FILE = './data/usersActionData.json';

const getAllUsers = () => {
  return jf.readFile(FILE);
};

const setusers = (users) => {
  jf.writeFile(FILE, users);
};

module.exports = {
  getAllUsers,
    setusers,
};