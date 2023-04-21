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
        name: users[4].name,
      },
    });
    !finduser &&
      (await User.bulkCreate(users)
        .then(() => {
          console.log("Usuarios creados exitosamente");
        })
        .catch((error) => {
          console.error("Error al crear usuarios:", error);
        }));
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
    console.log("enviar email");
    const config = {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "myseamprueba1@gmail.com",
        pass: "wixjpmkrswevqeni",
      },
    };

    const mensaje = {
      from: "myseamprueba1@gmail.com",
      to: email,
      subject: "Información modificada",
      html: `<p style="text-align:center;">Bienvenido ${name} a My Seam!!!, su información de perfil has sido Actualizada con exito</p>
      </br>
      <div style="text-align:center;">
      <img src="https://i.gifer.com/7efs.gif" alt="thanks!" />
      </div>`,
    };

    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(mensaje);

    console.log("Message sent: " + info.messageId);
  },
};
