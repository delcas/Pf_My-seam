const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      birthdate:{
        type: DataTypes.STRING,
        allowNull: true,
      },

      address:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      access_level:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      username:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      
      password:{
        type: DataTypes.STRING,
        allowNull: true,
      },

      email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      country:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      city:{
        type: DataTypes.STRING,
        allowNull: true,
      },

      isActive:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },

      image: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },

      MPAuthCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      MPUserId: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: true,
      paranoid: true
    }
  );
};
