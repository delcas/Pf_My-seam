const { Router } = require("express");
const {
  getProductHandler,
  postProductHandler,
  getProductId,
  deleteProduct,
} = require("../handlers/productHandlers");

const productRouter = Router();

productRouter.get("/", getProductHandler);
productRouter.post("/", postProductHandler);
productRouter.get("/:id", getProductId);
productRouter.delete("/", deleteProduct);

productRouter.put("/:idProduct", (req, res) => {});

module.exports = productRouter;
