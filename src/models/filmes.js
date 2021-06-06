const mongoose = require('mongoose') // importa o mongoose

//cria o esqueleto de como nossos dados serao guardados no Mongo
const filmeSchema = new mongoose.Schema({ 
    //titulo
    titulo: {
        type: String,
        required: true
    },
    //roterista
    roterista: {
        type: String,
        required: true
    },
    //genero
    genero: {
        type: String,
        required: true
    },

    //anoLancamento
    anoLancamento: {
        type: Date,
        required: true,
        default: Number
    },

    //criadoEm
    criadoEm: {
        type: Date,
        required: true,
        default:new Date
    }
})

//exporta o esqueleto do nosso documento para usarmos na nossa lógica, lembrando que em conjunto esses documentos já formarão a nossa collection 
module.exports = mongoose.model('filme', filmeSchema)