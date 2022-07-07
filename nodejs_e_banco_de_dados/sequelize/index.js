(async () => {
    const Planet = require("./models/planet")

    // const newPlanet = await Planet.create({
    //     name: "Netuno",
    //     position: 8,
    // })

    // consultar BD
    // const seePlanets = await Planet.findAll({
    //     where: {
    //         position: 1
    //     }
    // }) // findAll() ou findByPk(2)

    // atualizar dados
    // const updatePlanets = await Planet.findByPk(2)
    //     updatePlanets.position = 2
    //     await updatePlanets.save()

    // delete
    const deletePlanets = await Planet.findByPk(1)

    console.log(deletePlanets)

    await deletePlanets.destroy()

})();