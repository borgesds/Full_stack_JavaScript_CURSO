(async () => {
    const Planet = require("./models/planet")

    // const newPlanet = await Planet.create({
    //     name: "Netuno",
    //     position: 8,
    // })

    // consultar BD
    const seePlanets = await Planet.findAll({
        where: {
            position: 1
        }
    }) // findAll() ou findByPk(2)

console.log("Banco de dados:")
console.log(seePlanets)

})();