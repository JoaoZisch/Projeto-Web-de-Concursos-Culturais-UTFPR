
module.exports = (sequelize, Sequelize) => {   
    
    const Participacao = sequelize.define('participacao', {
        id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, allowNull: false, primaryKey: true
        },
        descricao: {
        type: Sequelize.STRING, allowNull: false
        },
        qtdVotos: {
            type: Sequelize.INTEGER, allowNull: false
        }

    });
    return Participacao;
}