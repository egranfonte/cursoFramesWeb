# cursoFramesWeb
##Curso Udemy MEAN
###Projeto Curso Frames WEB

###Criar pastas
> mkdir CursoFramesWeb && cd CursoFramesWeb
> mkdir backend && cd backend

###Criar o "package.json"  (de index.js para loader.js)
> npm init

###Instalar as dependencias
> npm install express body-parser mongoose node-restful mongoose-paginate lodash express-query-int pm2 --save

###Sempre deixa a aplicação no ar ( desenvolvimento)
>npm install nodemon --save-dev

###Criar arquivo
> loader.js
```
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
```
Executar o projeto 
> npm run dev

Abrir o browser 
> 127.0.0.1:3003

Email [egranfont@gmail.com](egranfont@gmail.com)
