const Sequelize = require('sequelize');
const db = require('../config/db_sequelize');
const Usuario = require('../models/models_postgres/Usuario');
const path = require('path');
const { Console } = require('console');

//deixar comentado, esse codigo reseta o banco de dados.
 /*
db.sequelize.sync({force: true}).then(() => {
    console.log('{ force: true }');
});
*/

/*
//Cria user ADM Inicial
db.Usuario.create({
    login:'adm',
    senha:'1',
    pergunta_secreta:'1',
    resposta_pergunta:'1',
    flagadm:'1'
    });
*/

module.exports = {
    async getLogin(req,res){
        res.render('usuario/login',{layout: 'noMenu.handlebars'});
    },
    async getLogout(req,res){
        req.session.destroy();
        res.redirect('/');
    },
    async postLogin(req,res){
        db.Usuario.findAll({ where: {login: req.body.login, senha: req.body.senha}}
        ). then (usuarios => {
            if (usuarios.length > 0){
                if(usuarios[0].flagadm == 1){
                    req.session.login = req.body.login
                    req.session.isadm = usuarios[0].flagadm
                    //res.render('concurso/concursoList', {layout: 'main.handlebars'});
                    res.redirect('/home');
                }
                else{
                req.session.login = req.body.login
                req.session.isadm = usuarios[0].flagadm
                //res.render('concurso/concursoList', {layout: 'mainUserNormal.handlebars'});
                res.redirect('/home');
            }

            }
            else
                res.redirect('/');
        });
    },
    async getRecuperarSenha(req, res) {
        db.Usuario.findAll({where: {login: req.params.login}}). then (usuarios => {
            if (usuarios.length > 0){
                res.render('usuario/recuperarSenha', {layout: 'noMenu.handlebars', login:req.params.login, pergunta:usuarios[0].pergunta_secreta});
            }
            else{
                res.redirect('/');
            }
        });
    },
    async postRecuperarSenha(req, res) {
        db.Usuario.findAll({where: {login: req.body.login,resposta_pergunta:req.body.resposta}}).then (usuarios => {
            if (usuarios.length > 0){
                res.render('usuario/senhaRecuperada', {layout: 'noMenu.handlebars', senha:usuarios[0].senha});
            }
            else{
                res.redirect('/');
            }
        });
    },
    async getCreate(req, res) {   

        var dtini = '2021-11-14 rgtete'
        dtini = String(dtini.slice(0,10)); 
        var dd = String(dtini.slice(8,10));
        var mm = String(dtini.slice(5,7));
        var yyyy = String(dtini.slice(0,4));
        console.log("ney")
        console.log(yyyy, mm, dd)

        var today = new Date(yyyy,mm-1,dd);
        console.log(today)

        res.render('usuario/usuarioCreate');
    },
    async postCreate(req, res) {
        db.Usuario.create({
            login:req.body.login,
            senha:req.body.senha,
            pergunta_secreta:req.body.pergunta,
            resposta_pergunta:req.body.resposta,
            flagadm:req.body.flagadm
            });
        res.redirect('/home');
    },
    async getList(req, res) {
        db.Usuario.findAll().then (usuarios => {
            res.render('usuario/usuarioList', {usuarios: usuarios.map(usuarios => usuarios.toJSON())});
        });
    },

    async getDelete(req, res) {
        await db.Usuario.destroy({
                where: {
                    id: req.params.id
             }
         })
             
        res.redirect('/home');
     }
}   