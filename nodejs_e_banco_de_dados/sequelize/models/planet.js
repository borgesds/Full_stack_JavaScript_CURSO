const {DataTypes} = require("sequelize") // busca o sequelize contido no arquivo sequelize.js = const sequelize = new Sequelize(database)
const sequelize = require("../config/sequelize")

const Planet = sequelize.define("planets", {
    name: DataTypes.STRING,
    position: DataTypes.INTEGER,
})

module.exports = Planet