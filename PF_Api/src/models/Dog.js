const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dog", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
    },
    height_min: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_max: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight_min: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight_max: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image:{
      type:DataTypes.STRING(500),
      allowNull:true,
    }
  },{
    timestamps:true,
    updatedAt:false,
  });
};
