const Sequelize = require('sequelize');
const db = require('../config/db_sequelize');
const Participacao = require('../models/models_postgres/participacao');
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
        db.Participacao.create({
            descricao:req.body.descricao,
            });
        res.render('participacao/participacaoList',{layout: 'infoConcursosMenu.handlebars'});
    },
    async getList(req, res) {
        db.Participacao.findAll().then (participacaos => {
            res.render('participacao/participacaoList', {participacaos: participacaos.map(participacaos => participacaos.toJSON())});
        });
    }
    
}   