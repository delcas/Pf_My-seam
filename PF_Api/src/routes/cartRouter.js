const { Router } = require("express");
const {
  getCartProducts,
  createCartProduct,
  deleteCartProduct,
  modifyCartProduct,
  deleteCartAllProducts,
} = require("../handlers/cartHandler.js");
const cartRouter = Router();

cartRouter.get("/", getCartProducts);

cartRouter.post("/", createCartProduct);

cartRouter.put("/", modifyCartProduct);

// cartRouter.delete("/", deleteCartProduct);

module.exports = cartRouter;
