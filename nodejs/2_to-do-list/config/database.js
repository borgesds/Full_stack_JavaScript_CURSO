//Arquivo de configuração do mongoose
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//Conectar o banco de dados mongo
mongoose.connect('mongodb+srv://borges:lostawer@cluster0.hvasiwo.mongodb.net/todo-list', { useNewUrlParser: true, useUniFiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error(err))
