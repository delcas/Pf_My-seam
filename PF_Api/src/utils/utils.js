const axios = require("axios");
const { Product } = require("../db");

// funcion asincrona traer la data de la API con las propiedades deseadas
async function getApiProducts() {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    // console.log(response.data.products.length);
    let product = await response.data.products.map((p) => {
      return getJson(p);
    });
    // console.log(product);
    return product;
  } catch (error) {
    console.log(error.message);
    return "Data API error, not found";
  }
}
//----------------------------------------------------------------------
// funcion para llenar la tabla Products con los productos obtenidos de la API
async function fillTableProducts() {
  const products = await getApiProducts();
  await products.forEach((e) => {
    Product.create({
      name: e.name,
      description: e.description,
      price: e.price,
      image: e.image,
      stock: e.stock,
    });
  });
}
//----------------------------------------------------------------------
// funcion asincrona para buscar producto por su nombre
async function productDB(name) {
}

//----------------------------------------------------------------------
// funcion asincrona para traer toda la data de la tabla Product
async function getDBproducts() {
  
}
//----------------------------------------------------------------------
//formato de objeto .JSON para enviar a la tabla Products
const getJson = (product) => {
  return {
    name: product.title,
    description: product.description,
    price: product.price,
    image: product.images,
    stock: product.stock,
  };
};

//----------------------------------------------------------------------
module.exports = {
  fillTableProducts,
  getApiProducts,
  productDB,
  getDBproducts,
};
