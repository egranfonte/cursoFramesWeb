const mongoose = require('mongoose')
mongoose.Promise = global.Promise
//{ useMongoClient: true }
module.exports = mongoose.connect('mongodb://localhost:27017/db_finance',{ useNewUrlParser: true })