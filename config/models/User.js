const sequelize = require('sequelize');
const connection = require('../conection');

const User = connection.define('User', {
    Id: {
        type: sequelize.INTEGER,
        field: 'Id',
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: sequelize.STRING,
        field: 'Nombre'
    },
    Apellido: {
        type: sequelize.STRING,
        field: 'Apellido'
    },

}, 
{
        freezeTableName: true,
        operatorsAliases: false
    });
    
module.exports = User;