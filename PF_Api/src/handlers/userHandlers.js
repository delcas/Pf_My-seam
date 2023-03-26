const {
  userCreator,
  getAUser,
  getUsers,
  deleteUser,
  editUser
} = require("../controllers/userControllers.js");

module.exports = {
  postUserHandler: async (req, res, next) => {
    const { name, password, birthdate, username, email, image } = req.body;
    console.log(req.body);
    try {
      //tengo pendiente aún hacer el envío de validación email
      const user = await userCreator(
        name,
        password,
        birthdate,
        username,
        email,
        image,
      );
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
  getAUserHandler: async (req, res, next) => {
    try {
      const { id } = req.params;
      const userInfo = await getAUser(id);
      res.send(userInfo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteUserHandler: async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log("Eliminando el id " + id);
      await deleteUser(id);
      res.send("Successfully removed");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  setUserHandler: async (req, res, next) => {
    const update = req.body;
    const { id } = req.params;
    console.log(update, id);
    try {
      await editUser(update, id);
      res.send("Successfully edited");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
