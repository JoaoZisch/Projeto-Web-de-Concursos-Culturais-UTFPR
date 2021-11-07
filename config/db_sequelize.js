const Sequelize = require('sequelize');
const concurso = require('../models/models_postgres/concurso.js');
const participacao = require('../models/models_postgres/participacao.js');
//const sequelize = new Sequelize('database', 'username', 'password', {
const sequelize = new Sequelize('web2_db', 'postgres', '91323054', {
    host: 'localhost',
    dialect: 'postgres'
  });

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Usuario = require('../models/models_postgres/usuario.js')(sequelize, Sequelize);
db.Concurso = require('../models/models_postgres/concurso.js')(sequelize, Sequelize); 
db.Concurso.belongsToMany(db.Usuario, { through: db.Participacao });
module.exports = db;

