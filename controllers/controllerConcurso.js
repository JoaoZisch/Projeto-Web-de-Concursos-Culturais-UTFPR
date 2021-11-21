const Sequelize = require('sequelize');
const db = require('../config/db_sequelize');
const Concurso = require('../models/models_postgres/concurso');
const path = require('path');
const { Console } = require('console');

module.exports = {
    async getCreate(req, res) {
        res.render('concurso/concursoCreate');
    },
    async postCreate(req, res) {
        db.Concurso.create({
            nome:req.body.nome,
            descricao:req.body.descricao,
            dtMaxPart: req.body.dtMaxPart,
            dtFimConcurso: req.body.dtFimConcurso,
            tipoMidia: req.body.tipoMidia 
            });
        res.redirect('/home');
    },
    async getList(req, res) {
        db.Concurso.findAll().then (concursos => {
            res.render('concurso/concursoList', { concursos: concursos.map(concursos => concursos.toJSON())});
        });
    },
    async getListUP(req, res) {
        db.Concurso.findAll().then (concursos => {
            res.render('concurso/concursoList',{layout: 'mainUserNormal.handlebars',concursos: concursos.map(concursos => concursos.toJSON())}); 
        });
    },

    ////////////// Pagina de Info ////////////////

    async getInfoPage(req, res){

       
        try {
        const nome = req.params.nome
        const concursoSelecionado = await db.Concurso.findOne( {raw: true, where:{nome: nome}})
        
        const participacoesConcurso = await db.Participacao.findAll( {raw: true, where:{concursoId: concursoSelecionado.id}})
        
        if(concursoSelecionado.tipoMidia == 'imagem')
            res.render('concurso/infoConcurso', {layout: 'infoConcursosMenu.handlebars', concursoSelecionado, participacoesConcurso}) 
        else{
            res.render('concurso/infoConcursoVideo', {layout: 'infoConcursosMenu.handlebars', concursoSelecionado, participacoesConcurso}) 
        }   

        } catch (error) {
            console.log(error)
        }

    }

}   