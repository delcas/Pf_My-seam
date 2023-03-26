const { Product } = require("../db.js");
const { productDB, getDBproducts } = require("../utils/utils");

module.exports = {
  getProduct: async (name) => {
    if (name) {
      // obtener 1 producto por nombre
      console.log(`GET product or products by name request ${name}`);
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
    //validar si existe la informacion necesaria para hacer el post
    if (name || description || price || image || stock || userId) {
      console.log("POST request /product: creating new dproduct");
      if (price < 0) throw new Error("error: valor de precio Negativo");
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
      throw new Error("No se envio la informacion necesaria");
    }
  },
  getIdProduct: async (id) => {
    console.log("GET request /product/:ID get by product ID");
    const idDb = await Product.findByPk(id);
    if (idDb) {
      return idDb;
    } else {
      throw new Error(`No se encontro Producto con el Id:${id} solicitado`);
    }
  },
};
