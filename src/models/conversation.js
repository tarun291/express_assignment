const Chatbot=require('./chatbot')
const Conversation = sequelize.define('Chatbot', {
    conversationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Conversation.belongsTo(Chatbot, { foreignKey: 'chatbotId', onDelete: 'SET NULL', onUpdate: 'CASCADE' })
Chatbot.hasMany(Conversation,{foreignKey:'chatbotId'})
