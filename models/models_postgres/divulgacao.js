
module.exports = (sequelize, Sequelize) => {   
    
    const Divulgacao = sequelize.define('divulgacao', {
        id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, allowNull: false, primaryKey: true
        },
        titulo: {
        type: Sequelize.STRING, allowNull: true
        },
        texto: {
            type: Sequelize.STRING, allowNull: true
        }

    });
    return Divulgacao;
}