module.exports = (sequelize, Sequelize) => {   
    const Concurso = sequelize.define('concurso', {
        id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, allowNull: false, primaryKey: true
        },
        nome: {
            type: Sequelize.STRING, allowNull: false
        },
        descricao: {
            type: Sequelize.STRING(6969), allowNull: false
        },
        dtMaxPart : {
            type: Sequelize.DATEONLY, allowNull: false
        },     
        dtFimConcurso: {
            type: Sequelize.DATEONLY, allowNull: false
        },
        tipoMidia: {
            type: Sequelize.STRING, allowNull: false
        },
        fotoCapa:{
            type: Sequelize.STRING, allowNull: true
        },
        flagativo: {
            type: Sequelize.INTEGER, allowNull: true, defaultValue: 1
        }
    });
    return Concurso;
}