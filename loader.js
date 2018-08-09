//servidor express
//backend estará rodando na porta 3003
const porta = 3003

//
const bodyParser = require('body-parser' )
//framework web express
const express = require('express')
const server = express()
//para toda requisicao que chegar dentro do backend será passado por esse midleware urlencoded
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(porta, function(){
    console.log(` BACKEND está rodando na porta ${porta}.`)
})

server.use(function (req,res,next){
    res.send('Funcionou!')
})