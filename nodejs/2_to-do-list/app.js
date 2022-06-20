//Import
const express = require('express')
const checkListRouter = require('./src/routes/checklist')
require('./config/database')


const app = express()
//Verifica se tem algum json para deixar disponível
app.use(express.json())

app.use('/checklist', checkListRouter) //Todas as rotas que estirem dentro vão sem derivadas do checklist.js

// //Middlewares - Logar informações
// const log = (req, res, next) => {
//     console.log(req.body)
//     console.log(`Data: ${Date.now()}`)
//     next()
// }

// app.use(log)

// //Localhost:3000
// app.get('/', (req, res) => {
//     res.send('<h1>Minha lista de tarefas</h1>')
// })

// //Localhost:3000/json
// app.get('/json', (req, res) => {
//     res.json({title: 'Tarefa x', done: true})
// })

//Chamar o servidor
app.listen(3000, () => {
    console.log('Servidor Online')
})