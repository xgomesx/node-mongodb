const mongoose = require( 'mongoose' )

const Schema = mongoose.Schema({
nome:String,
preco:Number,
tamanho: String,
tipo: String

})

const $TM_FILENAME_BASE= mongoose.model('produto',Schema)

module.exports = Produto