
module.exports = (sequelize, Sequelize) => {   
    const Usuario = sequelize.define('usuario', {
        id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, allowNull: false, primaryKey: true
        },
        login: {
        type: Sequelize.STRING, allowNull: false
        },
        senha: {
            type: Sequelize.STRING, allowNull: false
        },
        pergunta_secreta: {
            type: Sequelize.STRING, allowNull: false
        },
        resposta_pergunta: {
            type: Sequelize.STRING, allowNull: false
        },
        flagadm: {
            type: Sequelize.BOOLEAN, allowNull: true
        }
    });
    return Usuario;
}