const { getProduct } = require("../controllers/productControllers");
const { fillTableProducts } = require("../utils/utils");

module.exports = {
  getProductHandler: async (req, res) => {
    const { name } = req.query;
    try {
      //llenar la tabla products
      await fillTableProducts();
      //-------------------------
      res.status(200).json(await getProduct(name));
    } catch (error) {
      res.status(404).json({ err: error.message });
    }
  },
  postProductHandler: async (req, res) => {
    try {
    } catch (error) {
      res.status(404).json({ err: error.message });
    }
  },
};
