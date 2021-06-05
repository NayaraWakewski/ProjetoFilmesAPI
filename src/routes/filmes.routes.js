const express = require('express')
const router = express.Router()

const controller = require('../controllers/filmesController')

//Create/Criar -> Post
router.post('/', controller.criaFilme)

//Read/Ler -> Get
router.get('/', controller.listaFilmes)

//Read/Ler -> Get
router.get('/:id', controller.listaUmFilme)

//Update/atualizar -> Patch
router.patch('/:id', controller.atualizaFilme)

//Delete/deletar -> Delete
router.delete('/:id', controller.deletaFilme)

module.exports = router