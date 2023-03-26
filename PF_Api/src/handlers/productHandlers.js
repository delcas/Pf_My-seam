const {
  getProduct,
  postProduct,
  getIdProduct,
  productDelete,
} = require("../controllers/productControllers");
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
    const data = req.body;
    try {
      res.status(200).json(await postProduct(data));
    } catch (error) {
      res.status(404).json({ err: error.message });
    }
  },
  getProductId: async (req, res) => {
    const { id } = req.params;
    try {
      res.status(200).json(await getIdProduct(id));
    } catch (error) {
      res.status(404).json({ err: error.message });
    }
  },
  deleteProduct: async (req, res) => {
    const { id } = req.query;
    try {
      res.status(200).json(await productDelete(id));
    } catch (error) {
      res.status(404).json({ err: error.message });
    }
  },
};
