const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "cart",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true,
          },
          state: {
            type: DataTypes.STRING(30),
            allowNull:false,
          }
    },
    {
      timestamps: false,
    }
  )
}