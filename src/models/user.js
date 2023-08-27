const sequelize = require('../db/index')
const { DataTypes } = require('sequelize');
const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    }
}, {
});


module.exports = User;
