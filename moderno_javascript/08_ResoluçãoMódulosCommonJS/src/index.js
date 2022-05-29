import Planet from './planeta.js'
import { covertAUtoKm } from './planet_operation.js'

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
    let distanceFromSun = covertAUtoKm(planet.auTosun).toFixed(2)
    console.log(`${planet.name} - ${planet.auTosun}AU - ${distanceFromSun}Km`)
})