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
    async getAllChatbot(userId,page,limit) {
        try {
            page = Number(page) || 1; 
            limit = Number(limit) || 3;
            const bots = await Chatbot.findAll({
                where: {
                    userId: userId
                },
                limit: limit*1,
                offset: (page-1)*limit
            })
            return bots;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = ChatbotRepository;