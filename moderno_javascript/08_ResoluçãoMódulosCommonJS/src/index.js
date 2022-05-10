const Planet = require('./planeta')
const planetOperation = require('./planet_operation')

let planets = [
    new Planet("Mercúrio", 0.39),
    new Planet("Venus", 0.72),
    new Planet("terra", 1),
    new Planet("Marte", 1.52),
    new Planet("Júpiter", 5.2),
    new Planet("Saturno", 9.53),
    new Planet("Urano", 19.1),
    new Planet("Netuno", 30)
]

planets.forEach(planet => {
    distanceFromSun = planetOperation.convertAUtoKm(planet.auTosun).toFixed(2)
    console.log(`${planet.name} - ${planet.auTosun}AU - ${distanceFromSun}Km`)
})