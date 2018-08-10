//
const CicloPagamento = require('./cicloPagamento')

//servicos restful com todo o padrão 
CicloPagamento.methods(['get', 'post','put','delete'])

//Quando for o put/post, ele retorna o objeto novo
CicloPagamento.updateOptions({new: true, runValidators: true})

//contador
CicloPagamento.route('count', function(req,res,next){
    CicloPagamento.count(function(error,value){
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})   
        }
    })
})

//exportar CicloPagamento
module.exports = CicloPagamento

