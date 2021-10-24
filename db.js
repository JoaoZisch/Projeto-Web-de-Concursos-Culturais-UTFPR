const Sequelize = require('sequelize');
const sequelize = new Sequelize('dprnxkcs','dprnxkcs','v0oUqBB3Ewv7q59c9irI44Lse-ig-NIa', {
host: 'kesavan.db.elephantsql.com',
dialect: 'postgres'
});
module.exports = sequelize;