const Planet = require("../models/planet")

module.exports = {
    async store(req, res) {
        const {name, position} = req.body

        const planet = await Planet.create({name, position})
        return res.json(planet)
    },

    async index(req, res) {
        const planet = await Planet.findAll()

        return res.json(planet)
    },

    async put(req, res) {
        const {name, size, position} = req.body
        await Planet.update(
            {name, size, position},
            {
                where: {
                    id: req.params.id
                }
            }
        )
        return res.send("Planet atualizado com sucesso")
    },

    async delete(req, res) {
        await Planet.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        )
        return res.send("Planet DELETADO com sucesso")
    }
}