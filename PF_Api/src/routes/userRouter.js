const { Router } = require("express");
const { getUsersHandler } = require("../handlers/userHandlers.js");
const { User } = require("../db");
const userRouter = Router();

userRouter.get("/", getUsersHandler );

module.exports = userRouter;
