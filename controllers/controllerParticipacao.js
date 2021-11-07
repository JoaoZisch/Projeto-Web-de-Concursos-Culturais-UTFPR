const Sequelize = require('sequelize');
const db = require('../config/db_sequelize');
const Participacao = require('../models/models_postgres/Participacao');
const path = require('path');

module.exports = {
    
    async getCreate(req, res) {
        res.render('participacao/participacaoCreate');
    },
    async postCreate(req, res) {
        db.Participacao.create({
            descricao:req.body.descricao,
            });
        res.redirect('participacao/participacaoList');
    },
    async getList(req, res) {
        db.Participacao.findAll().then (participacaos => {
            res.render('participacao/participacaoList', {participacaos: participacaos.map(participacaos => participacaos.toJSON())});
        });
    }
    
}   