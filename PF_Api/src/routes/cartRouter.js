const { Router } = require("express");
const {
  getCartProducts,
  postCartProduct,
  deleteCartProduct,
  deleteCartAllProducts,
} = require("../handlers/cartHandler");
const cartRouter = Router();

// cartRouter.get("/", getCartProducts);

// cartRouter.post("/", postCartProduct);

// cartRouter.delete("/", deleteCartProduct);

module.exports = cartRouter;
