const { Router } = require("express");
const {
  getProductHandler,
  postProductHandler,
  getProductId,
} = require("../handlers/productHandlers");

const productRouter = Router();

productRouter.get("/", getProductHandler);
productRouter.post("/", postProductHandler);
productRouter.get("/:id", getProductId);

productRouter.delete("/:idProduct", (req, res) => {});
productRouter.put("/:idProduct", (req, res) => {});

module.exports = productRouter;
