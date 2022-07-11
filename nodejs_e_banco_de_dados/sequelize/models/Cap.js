const {DataTypes} = require("sequelize")
const sequelize = require("../config/sequelize")

const Cap = sequelize.define("cap", {
    name: DataTypes.STRING,
    registerNumber: DataTypes.INTEGER,
})

module.exports = Cap