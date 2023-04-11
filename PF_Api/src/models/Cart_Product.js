const { DataTypes } = require("sequelize");
const Cart = require("./Cart");
const Product = require("./Product");

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
        type: DataTypes.STRING,
        defaultValue: "Pendiente"
      },
    },
    {
      paranoid: true,
    }
  );
};
