const hitchedSpaceship = [
    ["Fenix", 8, true], 
    ["Golias", 10, true], 
    ["Helmet", 5, false],
    ["Element", 3, true], 
    ["Darvin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceship.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoingHitchPlatform = hitchedSpaceship.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlightedSpaceship = hitchedSpaceship.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataforma com processo de engate: " + (ongoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceship.join(", ")

console.log(message)