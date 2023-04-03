const { Router } = require("express");
const {
  getUsersHandler,
  postUserHandler,
  getAUserHandler,
  deleteUserHandler,
  setUserHandler,
} = require("../handlers/userHandlers.js");
const userRouter = Router();

userRouter.get("/", getUsersHandler);
userRouter.get("/:id", getAUserHandler);
userRouter.post("/", postUserHandler);
userRouter.delete("/:id", deleteUserHandler);
userRouter.put("/:id", setUserHandler);

module.exports = userRouter;
