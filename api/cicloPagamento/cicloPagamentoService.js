//
const CicloPagamento = require('./cicloPagamento')
//servicos restful com todo o padrão 
CicloPagamento.methods(['get', 'post','put','delete'])
//Quando for dar o update, ele vai retornar o objeto novo
//runVlidators: true
CicloPagamento.updateOptions({new: true, runVlidators: true})

//exportar CicloPagamento
module.exports = CicloPagamento

