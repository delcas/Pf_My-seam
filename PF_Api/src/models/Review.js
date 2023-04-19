const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "review",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true,
          },
        text: {//para usar mas adelante aqui va una reseña
            type: DataTypes.TEXT,            
        },
        kind: {//aqui va el tipo de producto al que se asocia el review en principio Service o Product
            type: DataTypes.TEXT,
            allowNull: false,
        },
        kindID:{//Aqui va el id del servicio/producto rateado
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        score: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    },
    {
      paranoid: true,    
      timestamps: false,     
    }
  )
}