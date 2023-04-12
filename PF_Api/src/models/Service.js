const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "service",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.ENUM("Arreglo de ropa", "Confección de ropa", "Bordado", "Decoración de ropa", "Todos"),
        allowNull: false,
        defaultValue: "Todos"
      },
       price: {
       type: DataTypes.ENUM("A convenir", "Negociable"),
       allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      }
    },
    {
      paranoid: true,
    }
  );
};
