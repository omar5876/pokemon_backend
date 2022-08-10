const { DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('tipo', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false})
}