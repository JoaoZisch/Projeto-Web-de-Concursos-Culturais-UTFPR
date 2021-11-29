const Sequelize = require('sequelize');
const db = require('../config/db_sequelize');
const Concurso = require('../models/models_postgres/concurso');
const path = require('path');
const { Console } = require('console');
const Usuario = require('../models/models_postgres/Usuario');
const { Op } = require("sequelize");

module.exports = {
    async getCreate(req, res) {
        res.render('concurso/concursoCreate');
    },
    async postCreate(req, res) {
        console.log(req.imageName)
        db.Concurso.create({
            nome:req.body.nome,
            descricao:req.body.descricao,
            dtMaxPart: req.body.dtMaxPart,
            dtFimConcurso: req.body.dtFimConcurso,
            tipoMidia: req.body.tipoMidia,
            fotoCapa: req.imageName

            });
        res.redirect('/home');
    },
    async getList(req, res) {
        try {
            const login = req.session.login;
            const userLogado = await db.Usuario.findOne( {raw: true, where:{login: login}});
            console.log(userLogado.login)
            await db.Concurso.findAll({where:{flagativo: {[Op.ne]:'0'}}}).then (concursos => {
                res.render('concurso/concursoList', {concursos: concursos.map(concursos => concursos.toJSON()), userLogado});
            });
        } catch (error) {
            console.log(error)
        }

    },
    async getListUP(req, res) {
        const login = req.session.login;
        const userLogado = await db.Usuario.findOne( {raw: true, where:{login: login}});
        console.log(userLogado.login)
        db.Concurso.findAll({where:{flagativo: {[Op.ne]:'0'}}}).then (concursos => {
            res.render('concurso/concursoList',{ layout: 'mainUserNormal.handlebars',concursos: concursos.map(concursos => concursos.toJSON()), userLogado}); 
        });
    },
  
    async postDelete(req, res) {

            const concursoSelecionado = await db.Concurso.findOne( {raw: true,  where: { id: req.body.id}})
    
            db.Concurso.update(
                { flagativo:'0' },
                { where: { id: concursoSelecionado.id} }
              )
              res.redirect('/home')
             
    },

    ////////////// Pagina de Info ////////////////

    async getInfoPage(req, res){

       
        try {
        const nome = req.params.nome
        const concursoSelecionado = await db.Concurso.findOne( {raw: true, where:{nome: nome}})
        const login = req.session.login
        const userLogado = await db.Usuario.findOne( {raw: true, where:{login: login}})
        
        const participacoesConcurso = await db.Participacao.findAll( {raw: true, where:{concursoId: concursoSelecionado.id, flagativo: {[Op.ne]:'0'}},order: [['qtdVotos', 'DESC'], ['id', 'ASC']]})
        
        if(concursoSelecionado.tipoMidia == 'imagem')
            res.render('concurso/infoConcurso', {layout: 'infoConcursosMenu.handlebars', concursoSelecionado, participacoesConcurso, userLogado}) 
        else if(concursoSelecionado.tipoMidia == 'videoAudio'){
            res.render('concurso/infoConcursoVideo', {layout: 'infoConcursosMenu.handlebars', concursoSelecionado, participacoesConcurso, userLogado}) 
        }else{
            res.render('concurso/infoConcursoTexto', {layout: 'infoConcursosMenu.handlebars', concursoSelecionado, participacoesConcurso, userLogado}) 
        }

        } catch (error) {
            console.log(error)
        }

    }

}   