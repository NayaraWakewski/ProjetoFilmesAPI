const Filme = require('../models/filmes')

const criaFilme = async (req, res)=>{
    //crie um novo filme
    const filme = new Filme({
        titulo: req.body.nome,
        roterista: req.body.roterista,
        genero: req.body.genero,
        anoLancamento: req.body.anoLancamento,
        criadoEm: req.body.criadoEm
    })
    //tentar mandar uma resposta e salvar no mongo
    try {
        const novoFilme = await filme.save() //que está salvando no banco de dados 
        res.status(201).json(novoFilme) // enviando resposta do servidor
    }catch (err){ // se nao conseguir criar, me diga qual foi o erro
        res.status(400).json({message: err.message})
    }
}

const listaFilmes = async (req, res)=> {
    const filmes = await Filme.find() //listando todos livros que estao salvos no MongoDB
    res.status(200).json(filmes) //enviando resposta do servidor
}

const atualizaFilme = async (req, res)=>{
    try {
        const filme = await Filme.findById(req.params.id)
        if (filme == null) {
            return res.status(404).json({ message: 'filme não encontrado!'})
        }

        if (req.body.titulo != null) {
            filme.titulo = req.body.titulo
        }

        if (req.body.roterista != null) {
            filme.roterista = req.body.roterista
        }

        if (req.body.genero != null) {
            filme.genero = req.body.genero
        }

        if (req.body.genero != null) {
            filme.anoLancamento = req.body.anoLancamento
        }

        if (req.body.criadoEm != null) {
            filme.criadoEm = req.body.criadoEm
        }

        const filmeAtualizado = await filme.save()
        res.json(filmeAtualizado)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

const deletaFilme = async (req, res)=>{
    try {
        const filme = await Filme.findById(req.params.id)
        if (filme == null) {
        return res.status(404).json({ message: 'filme não encontrado!'})
        }
    
        await filme.remove()
        res.json({ message: 'Filme deletado com sucesso!'})
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
}

const listaUmFilme = async (req, res ) => {
    const filme = await Filme.findById(req.params.id)

    if (filme == null) {
        return res.status(404).json({ message: 'filme não encontrado!'})
    }

    res.json(filme)
}

module.exports = { 
    criaFilme,
    listaFilmes,
    atualizaFilme,
    deletaFilme,
    listaUmFilme

}