const {userCreator, getAUser, getUsers} = require("../controllers/userControllers.js");

module.exports = {
  postUserHandler: async (req, res) => {},
  getUsersHandler: async (req, res) => {
    try {       
      const allUsers = await getUsers();
      console.log(allUsers);
      res.status(200).send(allUsers);
    } catch (error) {
      res.status(400).send("User no encontrado");
    }
  },
  getAUserHandler: async (req, res) => {},

};
