const sequelize = require('../db/index')
const { DataTypes } = require('sequelize');
const User = sequelize.define('User', {
    id: {
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
    // Other model options go here
});

module.exports = User;

console.log(User === sequelize.models.User); // true