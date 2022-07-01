//Import
const express =require('express')

const Checklist = require('../models/checklist')
const Task = require('../models/task')

//Criar rota
const checklistDependentRoute = express.Router()



checklistDependentRoute.get('/:id/tasks/new', async (req, res) => {
    try {
        let task = Task()
        res.status(200).render('tasks/new', {checklistId: req.params.id, task: task})
    } catch (error) {
        res.status(422).render('pages/error', {errors: 'ERRO AO CARREGA O FORMULÁRIO'})
    }
})

checklistDependentRoute.post('/:id/tasks', async (req, res) => {
    let { name } = req.body.task
    let task = new Task({ name, checklist: req.params.id })

    try {
        await task.save()
        let checklist = await Checklist.findById(req.params.id)
        checklist.task.push(task)
        await checklist.save()
        res.redirect(`/checklist/${req.params.id}`)
    } catch (error) {
        let errors = error.errors
        res.status(422).render('tasks/new', {task: {...task, errors}, checklistId: req.params.id})
    }
})

module.exports = {checklistDependent: checklistDependentRoute}