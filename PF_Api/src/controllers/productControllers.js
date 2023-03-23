const { Product } = require("../db.js");
const { productDB, getDBproducts } = require("../utils/utils");

module.exports = {
  productCreator: async () => {
    console.log("holamundo");
    // await Product.create();
  },
  getAProduct: async () => {
    console.log("holamundo");
    // await Product.findByPk();
  },
  getProduct: async (name) => {
    if (name) {
      // obtener 1 producto por nombre
      console.log(`GET product name request ${name}`);
      return productDB(name);
    } else {
      console.log("GET all dogs request");
      // obtener todos los productos
      const allProducts = await getDBproducts();
      return allProducts;
    }
  },
};
