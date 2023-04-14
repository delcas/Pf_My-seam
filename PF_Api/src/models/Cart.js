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
            type: DataTypes.ENUM("En Compra", "Pagado", "Conclusion parcial", "Conclusion total", "Revision pendiente"),
            defaultValue: "En Compra",
          }
    },
    {
      paranoid: true,
    }
  )
}