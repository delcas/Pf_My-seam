const { Router } = require("express");
const {
  getCartProducts,
  createCartProduct,
  deleteCartProduct,
  modifyCartProduct,
  deleteCartAllProducts,
} = require("../handlers/cartHandler.js");
const cartRouter = Router();

cartRouter.post("/", createCartProduct);

cartRouter.get("/", getCartProducts);

cartRouter.put("/", modifyCartProduct);

// cartRouter.delete("/", deleteCartProduct);

module.exports = cartRouter;
