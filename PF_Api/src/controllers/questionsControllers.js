const { Service } = require('../db.js');


module.exports = {
    serviceCreator: async () => {
        await Service.create()
    },
    getAService: async () => {
        await Service.findByPk()
    },
    getServices: async () => {
        await Service.findAll()
    },
}