const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Mujer", "Hombre", "Niño", "Niña", "All"),
        allowNull: false,
        defaultValue: "All"
      },
      category: {
        type: DataTypes.ENUM(
          "Blusas",
          "Vestidos",
          "Faldas",
          "Buzos",
          "Camperas",
          "Pantalones",
          "Remeras",
          "Bermudas",
          "Sweaters",
          "Camisas",
          "Musculosas",
          "All"
        ),
        allowNull: false,
        defaultValue: "All"
      },
    },
    {
      timestamps: true,
      updatedAt: false,
    }
  );
};
