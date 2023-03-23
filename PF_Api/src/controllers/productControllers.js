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
    const productDB = async() => {
      const findDB = await Product.findAll();
      const productDB = findDB.map((e) => e.toJSON());
      return productDB;
    };
    let findProduct = await productDB?.filter((e) => e.name === name);
    if (findProduct[0]) {
      return findProduct[0];
    } else {
      return `Porduct whit name ${name}: NOT FOUND`;
    }
  },
  getProducts: async () => {
    const findDB = await Product.findAll();
    const productDB = findDB.map((e) => e.toJSON());
    return productDB;
  }
};
