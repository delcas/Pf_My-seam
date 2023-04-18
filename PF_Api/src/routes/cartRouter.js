const { Router } = require("express");
const {
  getCartProducts,
  createCartProduct,
  deleteCart,
  modifyCartProduct,
} = require("../handlers/cartHandler.js");
const cartRouter = Router();

cartRouter.post("/", createCartProduct);

cartRouter.get("/", getCartProducts);

cartRouter.put("/", modifyCartProduct);

cartRouter.delete("/", deleteCart);

module.exports = cartRouter;
