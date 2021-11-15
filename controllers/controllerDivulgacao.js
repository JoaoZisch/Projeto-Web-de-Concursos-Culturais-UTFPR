const Sequelize = require('sequelize');
const db = require('../config/db_sequelize');
const Concurso = require('../models/models_postgres/concurso');
const Divulgacao = require('../models/models_postgres/divulgacao');
const path = require('path');
const { Console } = require('console');
const auth = require('../middlewares/middlewares');
const { mainModule } = require('process');

module.exports = {
    async getCreate(req, res) {
        const login = req.session.login
        const userLogado = await db.Usuario.findOne( {raw: true, where:{login: login}})
        console.log(userLogado.flagadm)
        if(userLogado.flagadm == 1){
            db.Divulgacao.findAll().then (divulgacaos => {
                res.render('divulgacao/divulgaPage', { layout: 'main.handlebars', divulgacaos: divulgacaos.map(divulgacaos => divulgacaos.toJSON())});
            });
        }
        else{
            db.Divulgacao.findAll().then (divulgacaos => {
                res.render('divulgacao/divulgaPage', { layout: 'mainUserNormal.handlebars', divulgacaos: divulgacaos.map(divulgacaos => divulgacaos.toJSON())});
            });
        }

    },


    async getDivulgaCreate(req, res) {
        res.render('divulgacao/divulgaCreate');
    },

    async postDivulgaCreate(req, res) {
        db.Divulgacao.create({
            titulo:req.body.titulo,
            texto:req.body.texto,
            });
        res.redirect('/home');
    }


}   