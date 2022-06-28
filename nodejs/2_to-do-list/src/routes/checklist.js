//Import
const express =require('express')

const Checklist = require('../models/checklist')

//Criar rota
const router = express.Router()

// Visualizar os Json dentro do banco de dados
router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({})
        res.status(200).render('checklists/index', { checklists: checklists })
    } catch (error) {
        res.status(500).render('pages/error', {error: 'ERRO AO EXIBIR AS LISTAS DE TAREFAS'})
    }
})

// Criando rotas para novos dados
router.get('/new', async (req, res) => {
    try {
        let checklist = new Checklist()
        res.status(200).render('checklists/new', { checklist: checklist })
    } catch (error) {
        res.status(500).render('pages/error', {error: 'ERRO AO CARREGAR O FORMULÁRIO'})
    }
})

// Criar e mandar para o banco de dados
router.post('/', async (req, res) => {
    let { name } = req.body.checklist
    let checklist = new Checklist({name})
    
    try {
        await checklist.save()
        res.redirect.apply('/checklists')
    } catch(error) {
        res.status(422).render('checklists/new', {checklists: {...checklist, error}})
    }
})

// Buscar as coisas por id
router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/show', { checklist: checklist })
    } catch (error) {
        res.status(422).render('pages/error', {error: 'ERRO AO EXIBIR AS LISTAS DE TAREFAS'})
    }
})

//PUT para atualizar
router.put('/:id', async (req, res) => {
    let { name } = req.body

    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true})
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findByIdAndRemove(req.params.id)
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})

module.exports = router

// Visualizar os Json dentro do banco de dados
// router.get('/', async (req, res) => {
//     try {
//         let checklists = await Checklist.find({})
//         res.status(200).json(checklists)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// Criar e mandar para o banco de dados
// router.post('/', async (req, res) => {
//     let { name } = req.body
    
//     try {
//         let checklist = await Checklist.create({ name })
//         res.status(200).json(checklist)
//     } catch(error) {
//         res.status(422).json(error)
//     }
// })

// Buscar as coisas por id
// router.get('/:id', async (req, res) => {
//     try {
//         let checklist = await Checklist.findById(req.params.id)
//         res.status(200).json(checklist)
//     } catch (error) {
//         res.status(422).json(error)
//     }
// })

// router.post('/', (req, res) => {
//     console.log(req.body)
//     res.status(200).json(req.body)
// })

// router.get('/:id', (req, res) => {
//     console.log(req.params.id)
//     res.send(`ID: ${req.params.id}`)
// })

// //PUT para atualizar
// router.put('/:id', (req, res) => {
//     console.log(req.params.id)
//     res.send(`PUT ID: ${req.params.id}`)
// })

// //DELETE
// router.delete('/:id', (req, res) => {
//     console.log(req.params.id)
//     res.send(`DELETE ID: ${req.params.id}`)
// })

