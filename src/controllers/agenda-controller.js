const agenda = require('../models/agenda-model');
const helper = require('../helpers/agenda-helper');

const obterContatos = (req, res) =>{
    res.status(200).json(agenda)
}

const obterPorNome = (req, res) =>{
    const { nome } = req.query;
    const localizarNome = agenda.find(contato=> contato.nome == nome) 
    console.log(localizarNome)
    res.status(200).send(localizarNome)
}

const obterPorTelefone = (req, res)=>{
    const { telefone } = req.query;
    res.status(200).send(agenda.find(contato=> contato.telefone == telefone))
}
const cadastrarContato = (req, res) =>{
    const {nome, telefone, email, outrosTelefones} = req.body;

    let novoContato = {
        id: helper.incrementarId(agenda),
        nome: nome, 
        telefone: telefone, 
        email: email, 
        outrosTelefones: outrosTelefones
    }
    if(telefone != agenda.telefone){
        agenda.push(novoContato)
        res.status(201).json(novoContato)
        }
    else{
        res.json("numero já existe")
    }
}


module.exports={
    obterContatos,
    obterPorNome,
    obterPorTelefone,
    cadastrarContato
}
