const { User } = require("../db.js");

//provisional
let users = [
  {
    name: "name1",
    birthdate: "birthdate1",
    address: "address1",
    access_level: "access_level1",
    username: "username1",
    password: "password1",
    email: "email1",
    country: "country1",
    city: "city1",
    isActive: "isActive1",
    image: "https://i.dummyjson.com/data/products/1/1.jpg",
  },
  {
    name: "name2",
    birthdate: "birthdate2",
    address: "address2",
    access_level: "access_level2",
    username: "username2",
    password: "password2",
    email: "email2",
    country: "country2",
    city: "city2",
    isActive: "isActive2",
    image: "https://i.dummyjson.com/data/products/1/1.jpg",
  },
  {
    name: "name3",
    birthdate: "birthdate3",
    address: "address3",
    access_level: "access_level3",
    username: "username3",
    password: "password3",
    email: "email3",
    country: "country3",
    city: "city3",
    isActive: "isActive3",
    image: "https://i.dummyjson.com/data/products/1/1.jpg",
  },
];
module.exports = {
  userCreator: async ( name, password, birthdate, username, email, image ) => {
      return await User.create({
        name,
        password,
        birthdate,
        username,
        email,
        image,
      })
  },

  getAUser: async (id) => {
      return await User.findByPk(id);      
  },

  deleteUser: async (id) => {
      await User.destroy({
        where:{
          id,
        }
      });      
  },

  editUser: async(update, id)=>{
      await User.update(update, {
        where:{
          id,
        }
      });
  },

  getUsers: async () => {
    users.forEach((user) => {
      User.findOrCreate({
        where: {
          name: user.name,
          birthdate: user.birthdate,
          address: user.address,
          access_level: user.access_level,
          username: user.username,
          password: user.password,
          email: user.email,
          country: user.country,
          city: user.city,
          isActive: user.isActive,
          image: "https://i.dummyjson.com/data/products/1/1.jpg",
        },
      });
    });
    return await User.findAll();
  },
};
