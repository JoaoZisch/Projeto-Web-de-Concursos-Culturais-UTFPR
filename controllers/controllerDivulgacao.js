const Sequelize = require('sequelize');
const db = require('../config/db_sequelize');
const Concurso = require('../models/models_postgres/concurso');
const path = require('path');
const { Console } = require('console');
const auth = require('../middlewares/middlewares');
const { mainModule } = require('process');

module.exports = {
    async getCreate(req, res) {
        const login = req.session.login
        const userLogado = await db.Usuario.findOne( {raw: true, where:{login: login}})
        console.log(userLogado.flagadm)
        if(userLogado.flagadm == 1)
        res.render('divulgacao/divulgaPage', {layout: 'main.handlebars'});
        else{
        res.render('divulgacao/divulgaPage', {layout: 'mainUserNormal.handlebars'});
        }
    }

}   