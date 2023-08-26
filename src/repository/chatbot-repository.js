const Chatbot = require('../models/chatbot')

class ChatbotRepository {
    async createChatbot(data) {
        try {
            console.log(data)
            const chatbot = await Chatbot.create(data)
            return chatbot;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async deleteChatbot(chatbotId) {
        console.log(chatbotId);
        try {
            await Chatbot.destroy({
                where: {
                    chatbotId: chatbotId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async updateChatbot(chatbotId, data) {
        try {
            const chatbot = await Chatbot.update(data, {
                where: {
                    chatbotId: chatbotId
                },
            })
            return chatbot;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }


    async getChatbot(chatbotId) {
        try {
            const chatbot = await Chatbot.findByPk(chatbotId);
            return chatbot;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
    async getAllChatbot(userId) {
        try {
            const bots = await Chatbot.findAll({
                where: {
                    userId: userId
                }
            })
            return bots;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = ChatbotRepository;