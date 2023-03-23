const {productCreator, getAProduct, getProducts, getProduct} = require("../controllers/productControllers.js");

module.exports = {
  postProductHandler: async (req, res) => {
    try {
      
    } catch (error) {
      
    }
  },
  getProductsHandler: async (req, res) => {
    try {
      
    } catch (error) {
      
    }
  },
  getAProductHandler: async (req, res) => {
    const {name} = req.body;
    try {
      if (name) {
        // obtener 1 producto por nombre
        const prod = await getProduct(name);
        res.status(200).json(prod)
      } else {
        console.log("GET all dogs request");
        // obtener todos los productos
        const allProducts = await getProducts();
        res.status(200).json(allProducts)
      }   
    } catch (error) {
      console.log(error.message);
      res.status(401).send("Data API error, not found");
    }
  },
};
