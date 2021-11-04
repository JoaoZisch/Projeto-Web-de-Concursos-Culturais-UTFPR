const Sequelize = require('sequelize');
const db = require('../config/db_sequelize');
const Usuario = require('../models/models_postgres/Participacao');
const path = require('path');

//deixar comentado, esse codigo reseta o banco de dados.
  /*
db.sequelize.sync({force: true}).then(() => {
    console.log('{ force: true }');
});
*/

module.exports = {
    /*
    async getCreate(req, res) {
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
    }
    */
}   