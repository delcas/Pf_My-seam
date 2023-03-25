const { Service, User } = require('../db.js');
const { Op } = require('sequelize');

module.exports = {
    serviceCreator: async (data) => {
        const { name, description, price, userId } = data;
        if(price <= 0) throw new Error("El precio debe ser mayor a 0");
        return Service.create({
            name,
            description,
            price,
            userId
        });
    },
    getAService: async (id) => {
        const service = await Service.findByPk(id,{
            include: User});
        return service;
    },
    getServices: async (name) => {
        const services = await Service.findAll({
            where: {
                name: {
                    [Op.iLike] : '%' + name + '%'
                }
            },
            include: User,
        })
        return services;
    }
}