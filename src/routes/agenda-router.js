const express = require('express');
const agendaController = require('../controllers/agenda-controller')
const { route } = require('../app');
const router = express.Router();


router.get('/agenda', agendaController.obterContatos)

router.get('/agenda/nome', agendaController.obterPorNome)

router.get('/agenda/telefone', agendaController.obterPorTelefone)

router.post('/agenda', agendaController.cadastrarContato)

module.exports= router
