const { DataTypes } = require("sequelize");
// const{ Cart, Product }= require("../db.js");
module.exports = (sequelize) => {
  sequelize.define(
    "cart_product",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      conclusion: {
        type: DataTypes.ENUM("Pendiente", "Entregado", "Perdido", "Rechazado", "En Litigio"),
        defaultValue: "Pendiente",
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );
};
