const { DataTypes } = require("sequelize");
const { Product, Service } = require("../db.js");

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
            allowNull: true,            
        },
        kind: {//aqui va el tipo de producto al que se asocia el review en principio Service o Product
            type: DataTypes.ENUM("Service", "Product"),
            allowNull: false,
        },
        kind_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              Service: Service,
              Product: Product,
            },
            key: "id",
          },
          validate: {
            isKindIdValid(value) {
              const Model = sequelize.models[this.kind];
              return Model.findByPk(value)
              .then((instance) => {
                if (!instance) {
                  throw new Error(`Invalid ${this.kind}_id: ${value}`);
                }
              });
            },
          },
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