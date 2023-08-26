const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');
const User = require('./user');

const Chatbot = sequelize.define('Chatbot', {
    chatbotId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Chatbot.belongsTo(User, { foreignKey: 'userId', onDelete: 'SET NULL', onUpdate: 'CASCADE' });
User.hasMany(Chatbot, { foreignKey: 'userId' });

module.exports=Chatbot