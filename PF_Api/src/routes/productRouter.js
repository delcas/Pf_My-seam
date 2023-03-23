const { Router } = require("express");
const { fillTableProducts } = require("../utils/utils");
const { getProduct } = require("../controllers/productControllers");
const productRouter = Router();

//llenar la tabla products
try {
  fillTableProducts();
} catch (error) {
  console.log(error.message);
}
//-------------------------------------

productRouter.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    res.status(200).json(await getProduct(name));
  } catch (error) {
    res.status(404).json({ err: error.message });
  }
});

productRouter.get("/:idProduct", (req, res) => {});
productRouter.post("/", (req, res) => {});
productRouter.delete("/:idProduct", (req, res) => {});
productRouter.put("/:idProduct", (req, res) => {});

module.exports = productRouter;
