const axios = require("axios");
const { Op } = require("sequelize");
const { Product } = require("../db");

// funcion asincrona traer la data de la API con las propiedades deseadas
async function getApiProducts() {
  try {
    let product = [];
    const response = await axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        product = response.data.products.map((p) => {
          const UsId = (m) => { return Math.ceil(Math.random()*m) };
          const id = UsId(5);
          return getJson(p, id);
        });
      });
    return product;
  } catch (error) {
    console.log(error.message);
    return "Data API error, no encontrado";
  }
}
//----------------------------------------------------------------------
// funcion para llenar la tabla Products con los productos obtenidos de la API
async function fillTableProducts() {
  const products = await getApiProducts();
  await products.forEach((e) => {
    Product.findOrCreate({
      where: {
        name: e.name,
        description: e.description,
        price: e.price,
        image: e.image,
        stock: e.stock,
        userid: e.userid
      },
    });
  });
}
//----------------------------------------------------------------------
// funcion asincrona para buscar producto por su nombre
async function productDB(name) {
  let productsDb = await Product.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  productsDb = productsDb.map((e) => e.toJSON());
  if (productsDb[0]) {
    return productsDb;
  } else {
    throw new Error(`Productos con nombre ${name}: NO ENCONTRADO`);
  }
}

//----------------------------------------------------------------------
// funcion asincrona para traer toda la data de la tabla Product
async function getDBproducts() {
  const findDB = await Product.findAll();
  const productDB = findDB.map((e) => e.toJSON());
  return productDB;
}
//----------------------------------------------------------------------
//formato de objeto .JSON para enviar a la tabla Products
const getJson = (product, id) => {
  return {
    name: product.title,
    description: product.description,
    price: product.price,
    image: product.images,
    stock: product.stock,
    userid: id
  };
};

//----------------------------------------------------------------------
module.exports = {
  fillTableProducts,
  getApiProducts,
  productDB,
  getDBproducts,
};
