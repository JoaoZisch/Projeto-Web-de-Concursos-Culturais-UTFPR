const Sequelize = require('sequelize');
const db = require('../config/db_sequelize');
const Concurso = require('../models/models_postgres/concurso');
const path = require('path');

module.exports = {
    async getCreate(req, res) {
        res.render('concurso/concursoCreate');
    },
    async postCreate(req, res) {
        db.Concurso.create({
            nome:req.body.nome,
            descricao:req.body.descricao,
            });
        res.redirect('/home');
    },
    async getList(req, res) {
        db.Concurso.findAll().then (concursos => {
            res.render('concurso/concursoList', { concursos: concursos.map(concursos => concursos.toJSON())});
        });
    }
}   