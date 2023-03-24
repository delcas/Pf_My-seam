const { Service } = require('../db.js');

module.exports = {
    serviceCreator: async (name, description, price) => {
        await Service.create(name, description, price)
    },
    getAService: async (id) => {
        await Service.findByPk(id)
    },
    getServices: async (name) => {
        await Service.findAll(name)
    },
}