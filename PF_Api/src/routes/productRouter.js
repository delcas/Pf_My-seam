const { Router } = require("express");
const {
  getProductHandler,
  postProductHandler,
} = require("../handlers/productHandlers");

const productRouter = Router();

productRouter.get("/", getProductHandler);
productRouter.post("/", postProductHandler);

productRouter.get("/:idProduct", (req, res) => {});
productRouter.delete("/:idProduct", (req, res) => {});
productRouter.put("/:idProduct", (req, res) => {});

module.exports = productRouter;
