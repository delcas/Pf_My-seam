const { Router } = require("express");
const {
  getProductHandler,
  postProductHandler,
  getProductId,
  deleteProduct,
  updateProduct,
} = require("../handlers/productHandlers");

const productRouter = Router();

productRouter.get("/", getProductHandler);
productRouter.post("/", postProductHandler);
productRouter.get("/:id", getProductId);
productRouter.delete("/", deleteProduct);
productRouter.put("/:id", updateProduct);

module.exports = productRouter;
