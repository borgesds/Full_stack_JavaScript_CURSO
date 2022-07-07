const Sequelize = require("sequelize")
const database = require("./config") // busca dentro da pasta config arquivo config.js

const sequelize = new Sequelize(database)

module.exports = sequelize