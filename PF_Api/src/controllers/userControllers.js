const { User } = require("../db.js");
const nodemailer = require("nodemailer");
const users = require("../utils/users.json");

module.exports = {
  userCreator: async (name, password, birthdate, username, email, image) => {
    return await User.create({
      name,
      password,
      birthdate,
      username,
      email,
      image,
    });
  },

  getAUser: async (id) => {
    return await User.findByPk(id);
  },

  deleteUser: async (id) => {
    await User.destroy({
      where: {
        id,
      },
    });
  },

  editUser: async (update, id) => {
    await User.update(update, {
      where: {
        id,
      },
    });
  },

  getUsers: async () => {
    const finduser = await User.findOne({
      where: {
      name: users[0].name,
    },
  })
  !finduser && await User.bulkCreate(users)
    .then(() => {
      console.log("Usuarios creados exitosamente");
    })
    .catch((error) => {
      console.error("Error al crear usuarios:", error);
    });
    return await User.findAll({
      order: [["id", "ASC"]],
    });
  },

  getUserByEmail: async (email) => {
    console.log("ENTRÉ a esta funcion");
    let userDb = await User.findOne({
      where: { email: email },
    });
    return userDb.dataValues;
  },

  enviarMail: async (email, name) => {
    const config = {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "myseampt10a@gmail.com",
        pass: "phejeewjpzlxihkg",
      },
    };

    const mensaje = {
      from: "myseampt10a@gmail.com",
      to: email,
      subject: "Gracias por Registrarte!",
      html: `<p style="text-align:center;">Bienvenido ${name} a My Seam!!!, su registro fue completado con exito</p>
      </br>
      <div style="text-align:center;">
      <img src="https://isewa.org.in/wp-content/uploads/2021/06/success.gif" alt="thanks!" />
      </div>`,
    };

    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(mensaje);

    console.log("Message sent: " + info.messageId);
  },
};
