const Sequelize = require('sequelize');
const db = require('../config/db_sequelize');
const Participacao = require('../models/models_postgres/participacao');
const Concurso = require('../models/models_postgres/concurso');
const Usuario = require('../models/models_postgres/Usuario');
const path = require('path');


module.exports = {
    
    async getCreate(req, res) {
        const dados = {
            nome:req.body.nome
        }
        console.log(dados.nome)
        res.render('participacao/participacaoCreate',{layout: 'infoConcursosMenu.handlebars', dados});
    },
    async postCreate(req, res) {
        const login = req.session.login
        const concurso = req.body.concurso
        const userLogado = await db.Usuario.findOne( {raw: true, where:{login: login}})
        const concursoSelecionado = await db.Concurso.findOne( {raw: true, where:{nome: concurso}})

        try {
            db.Participacao.create({
                usuarioId: userLogado.id,
                concursoId: concursoSelecionado.id,
                descricao:req.body.descricao,
                qtdVotos: 0
                });
            res.render('participacao/participacaoList',{layout: 'infoConcursosMenu.handlebars'});
        } catch (error) {
            console.log(error)
        }
       
    },
    async getList(req, res) {
        db.Participacao.findAll().then (participacaos => {
            res.render('participacao/participacaoList', {participacaos: participacaos.map(participacaos => participacaos.toJSON())});
        });
    }
    
}   