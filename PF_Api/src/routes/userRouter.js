const { Router } = require("express");
const { User } = require("../db");
const userRouter = Router();

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

userRouter.get("/", async (req, res) => {
  try {
     users.forEach((user) => {
      User.findOrCreate({
        where: { name: user.name,
            birthdate: user.birthdate,
            address: user.address,
            access_level: user.access_level,
            username: user.username,
            password: user.password,
            email: user.email,
            country: user.country,
            city: user.city,
            isActive: user.isActive,
            image: "https://i.dummyjson.com/data/products/1/1.jpg"
    },
      });
    });

    const allUsers = await User.findAll();
    console.log(allUsers);
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).send("User no encontrado");
  }
});

module.exports = userRouter;
