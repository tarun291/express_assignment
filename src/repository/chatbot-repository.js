const Chatbot = require('../models/chatbot')
const { Op } = require('sequelize');
class ChatbotRepository {
    async createChatbot(data) {
        try {
            const chatbot = await Chatbot.create(data)
            return chatbot;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async deleteChatbot(chatbotId) {
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
            if (page) {
                page = Number(page) || 1;
                limit = Number(limit) || 3;
                const bots = await Chatbot.findAll({
                    where: {
                        userId: userId
                    },
                    limit: limit * 1,
                    offset: (page - 1) * limit
                })
                return bots;
            }
            const bots = await Chatbot.findAll({
                where: {
                    userId: userId
                },
            })
            return bots;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
    async searchBot(filter) {
        try {
            if(filter.name){
                const bots = await Chatbot.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return bots;
            } 
            return await Chatbot.findAll();
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = ChatbotRepository;