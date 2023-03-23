const { Product } = require('../db.js');


module.exports = {
    productCreator: async () => {
        await Product.create()
    },
    getAProduct: async () => {
        await Product.findByPk()
    },
    getProducts: async () => {
        await Product.findAll()
    },
}