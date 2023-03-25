const { Service } = require('../db.js');
const { Op } = require('sequelize');

module.exports = {
    serviceCreator: async (name, description, price, userId) => {
        return Service.create({
            name,
            description,
            price,
            userId: userId
        });
    },
    getAService: async (id) => {
        await Service.findByPk(id)
    },
    getServices: async (name) => {
        const services = await Service.findAll({
            where: {
                name: {
                    [Op.iLike] : '%' + name + '%'
                }
            }
        })
        return services;
    }
}