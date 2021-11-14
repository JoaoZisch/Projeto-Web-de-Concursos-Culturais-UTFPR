const Sequelize = require('sequelize');
const db = require('../config/db_sequelize');
const Usuario = require('../models/models_postgres/Usuario');
const path = require('path');

module.exports = {
    logRegister(req, res, next) {
    console.log(req.url + req.method + new Date())
    next();
    },
    async sessionControl (req, res, next) {
    if(req.session.login != undefined){
        const login = req.session.login
        const userLogado = await db.Usuario.findOne( {raw: true, where:{login: login}})
        if(userLogado.flagadm == 1){
            next();
        }
        else{
            if(req.url != ('/usuarioCreate') || ('/usuarioList') || ('concursoCreate')) {
                next();
            }
            else{ 
                res.redirect('/concursoListUP');
                next();
            }
        }
      
    }
    else if ((req.url == '/') && (req.method == 'GET')) next();
    else if ((req.url == '/login') && (req.method == 'POST')) next();
    else if ((req.url).split('/')[1] == 'recuperarSenha') next();
    else res.redirect('/');
    }
    };