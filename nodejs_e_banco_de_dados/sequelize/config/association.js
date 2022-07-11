const Cap = require("../models/Cap")
const Planet = require("../models/planet")
const Satelite = require("../models/satelite")
const Spaceship = require("../models/Spaceship")
const cap = require("../models/Cap")
const Spaceship = require("../models/Spaceship")

Planet.hasOne(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" })
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" })

// Planet.hasMany(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" })
// Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" })

Cap.belongsToMany(Spaceship,{
    foreingKey: "capId",
    throught: "capSpaceship",
    as: "spaceships"
})

Spaceship.belongsToMany(Cap, {
    foreingKey: "spaceshipId",
    throught: "capSpaceship",
    as: "caps"
})

module.exports = { Planet, Satelite }
