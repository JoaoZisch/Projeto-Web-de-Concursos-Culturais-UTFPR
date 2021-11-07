
module.exports = (sequelize, Sequelize) => {   
    
    const Participacao = sequelize.define('participacao', {
        id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, allowNull: false, primaryKey: true
        },
        descricao: {
        type: Sequelize.STRING, allowNull: true
        },
        qtdVotos: {
            type: Sequelize.INTEGER, allowNull: true
        }

    });
    return Participacao;
}