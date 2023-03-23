const { Product } = require('../db.js');


module.exports = {
    productCreator: async ({ name, description, price, image, stock }) => {
        await Product.create({
            name,
            description,
            price,
            image,
            stock
        });
        return await Product.findAll({
            where: {
                name: name
            }
        })
    },
    getAProduct: async (id) => {
        return await Product.findByPk(id)
    },
    getProducts: async () => {
        return await Product.findAll()
    },
}