const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');
const User = require('./user');

const Chatbot = sequelize.define('Chatbot', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Chatbot.belongsTo(User);
User.hasMany(Chatbot);