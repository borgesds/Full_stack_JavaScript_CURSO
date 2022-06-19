//Import
const express =require('express')

//Criar rota
const router = express.Router()

router.get('/', (req, res) => {
    console.log('Olá tudo bem???')
    res.send()
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`ID: ${req.params.id}`)
})

//PUT para atualizar
router.put('/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`PUT ID: ${req.params.id}`)
})

//DELETE
router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`DELETE ID: ${req.params.id}`)
})

module.exports = router