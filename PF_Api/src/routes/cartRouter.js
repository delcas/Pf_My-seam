const { Router } = require("express");
const {
  getCartProducts,
  createCartProduct,
  deleteCartProduct,
  deleteCartAllProducts,
} = require("../handlers/cartHandler.js");
const cartRouter = Router();

// cartRouter.get("/", getCartProducts);

cartRouter.post("/", createCartProduct);

// cartRouter.delete("/", deleteCartProduct);

module.exports = cartRouter;
