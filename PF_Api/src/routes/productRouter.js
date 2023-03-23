const { Router } = require("express");
const { fillTableProducts } = require("../utils/utils");
const productRouter = Router();

//llenar la tabla products
try {
  fillTableProducts();
} catch (error) {
  console.log(error.message);
}
//-------------------------------------

productRouter.get("/", (req, res) => {});
productRouter.get("/:idProduct", (req, res) => {});
productRouter.post("/", (req, res) => {});
productRouter.delete("/:idProduct", (req, res) => {});
productRouter.put("/:idProduct", (req, res) => {});

module.exports = productRouter;
