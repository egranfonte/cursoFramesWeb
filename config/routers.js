//
const express = require('express')
//funcao que recebe server (server.js)
module.exports = function(server){
    
    //API Routers
    const router = express.Router()
    server.use('/api', router)

    // rotas da API
    const cicloPagamentoService = require('../api/cicloPagamento/cicloPagamentoService')
    //metodo node restul register
    cicloPagamentoService.register(router, '/cicloPagamento') 
    
    /*teste
    router.route('/teste').get(function(req,res,next){
        res.send('funcionou')
    })
    */
}