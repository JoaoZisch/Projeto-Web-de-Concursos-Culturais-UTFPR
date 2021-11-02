const Sequelize = require('sequelize');
//const sequelize = new Sequelize('database', 'username', 'password', {
const sequelize = new Sequelize('web2_db', 'postgres', 'POSTGRES', {
    host: 'localhost',
    dialect: 'postgres'
  });

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Usuario = require('../models/models_postgres/usuario.js')(sequelize, Sequelize);
module.exports = db;

