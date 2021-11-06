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
        type: Sequelize.STRING, allowNull: false
        },
    });
    return Concurso;
}