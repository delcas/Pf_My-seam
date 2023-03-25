const {
  userCreator,
  getAUser,
  getUsers,
} = require("../controllers/userControllers.js");

module.exports = {
  postUserHandler: async (req, res, next) => {
    const { name, birthdate, username, email, image } = req.body;
    try {
      //tengo pendiente aún hacer el envío de validación email
      const user = await userCreator({
        name,
        birthdate,
        username,
        email,
        image,
      });
      res.status(200).send(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getUsersHandler: async (req, res) => {
    try {
      const allUsers = await getUsers();
      console.log(allUsers);
      res.status(200).send(allUsers);
    } catch (error) {
      res.status(400).send("User no encontrado");
    }
  },
  getAUserHandler: async (req, res) => {
    async (req, res, next) => {
      //id
      try {
        const { id } = req.params;
        const userInfo = await getAUser(id);
        res.send(userInfo);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };
  },
  deleteUserHandler: async (req, res, next) => {
    try {
      const { id } = req.params;
      res.send("Successfully removed");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
