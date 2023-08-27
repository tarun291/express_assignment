const Chatbot = require('./chatbot')
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');
const Conversation = sequelize.define('Conversation', {
    conversationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false 
    }
});

Conversation.belongsTo(Chatbot, { foreignKey: 'chatbotId', onDelete: 'SET NULL', onUpdate: 'CASCADE' })
Chatbot.hasMany(Conversation, { foreignKey: 'chatbotId' })

module.exports = Conversation;
