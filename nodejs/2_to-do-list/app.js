//Import
const express = require('express')
const path = require('path')

const checkListRouter = require('./src/routes/checklist')
const rootRouter = require('./src/routes/index')
const methodOverride = require('method-override')

require('./config/database')


const app = express()
//Verifica se tem algum json para deixar disponível
app.use(express.json())
// Pega os valores do form e da url e deixam disponíveis 
app.use(express.urlencoded({extended: true}))
// Método complementar para banco de dados
app.use(methodOverride('_method', {methods: ['POST', 'GET']}))


// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// Setar o caminho onde as views esta(__dirname é sempre o diretório que estamos no momento)
app.set('views', path.join(__dirname, 'src/views'))
// Instalar a view engine
app.set('view engine', 'ejs')

app.use('/', rootRouter)
app.use('/checklist', checkListRouter) //Todas as rotas que estiverem dentro vão ser derivadas do checklist.js

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