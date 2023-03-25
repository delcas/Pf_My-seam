const { Product } = require("../db.js");
const { productDB, getDBproducts } = require("../utils/utils");

module.exports = {
  getProduct: async (name) => {
    if (name) {
      // obtener 1 producto por nombre
      console.log(`GET product name request ${name}`);
      return productDB(name);
    } else {
      console.log("GET all products request");
      // obtener todos los productos
      const allProducts = await getDBproducts();
      return allProducts;
    }
  },
  postProduct: async (data) => {
    const { name, description, price, image, stock, userId } = data;
    if (name || description || price || image || stock || userId) {
      console.log("POST request /product: creating new dproduct");
      if (price < 0) throw new Error("error price value Negative");
      const product = await Product.create({
        name,
        description,
        price,
        image,
        stock,
        userId,
      });
      return product;
    } else {
      console.log("POST request /product: Error");
      throw new Error("No necessary information was sent");
    }
  },
};
