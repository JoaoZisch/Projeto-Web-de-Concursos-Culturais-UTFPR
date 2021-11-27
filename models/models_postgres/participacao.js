
module.exports = (sequelize, Sequelize) => {   
    
    const Participacao = sequelize.define('participacao', {
        id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, allowNull: false, primaryKey: true
        },
        descricao: {
        type: Sequelize.STRING(6969), allowNull: true
        },
        qtdVotos: {
            type: Sequelize.INTEGER, allowNull: true
        },
        imagem: {
            type: Sequelize.STRING, required:false
        },
        nomeParticipante: {
            type: Sequelize.STRING, required:false
        },
        celular: {
            type: Sequelize.INTEGER, required:false
        }

    });
    return Participacao;
}