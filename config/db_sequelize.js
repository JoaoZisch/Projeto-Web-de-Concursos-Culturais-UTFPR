const Sequelize = require('sequelize');
const concurso = require('../models/models_postgres/concurso.js');
const participacao = require('../models/models_postgres/participacao.js');
//const sequelize = new Sequelize('database', 'username', 'password', {
const sequelize = new Sequelize('web2_db', 'postgres', 'POSTGRES', {
    host: 'localhost',
    dialect: 'postgres'
  });

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Usuario = require('../models/models_postgres/usuario.js')(sequelize, Sequelize);
db.Concurso = require('../models/models_postgres/concurso.js')(sequelize, Sequelize); 
db.Participacao = require('../models/models_postgres/participacao.js')(sequelize, Sequelize);
db.Divulgacao = require('../models/models_postgres/divulgacao.js')(sequelize, Sequelize);

db.Usuario.belongsToMany(db.Concurso, { through: { model: db.Participacao, unique: false }});
//talvez essa linha abaixo seja necessaria, deixar comentado por enquanto. 
//db.Concurso.belongsToMany(db.Usuario, { through: { model: db.Participacao, unique: false }});

module.exports = db;

