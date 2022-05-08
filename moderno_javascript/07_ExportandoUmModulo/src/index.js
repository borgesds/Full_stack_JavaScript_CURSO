const Planet = require('./planet')
const solarSystem = require('./solar_system')
const moment = require('moment')

const earth = new Planet("terra", 50100000)
earth.rotate()

solarSystem.planets.push(earth)
solarSystem.planets.push(new Planet("Marte", 144800000))
solarSystem.planets.push(new Planet("Mercurio", 74800000))
solarSystem.planets.push(new Planet("Saturno", 4270000000))

console.log(solarSystem)

console.log(moment().format("h:mm"))