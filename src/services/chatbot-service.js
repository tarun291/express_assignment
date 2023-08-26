const ChatbotRepository = require('../repository/chatbot-repository');


class ChatbotService {
    constructor() {
        this.ChatbotRepository = new ChatbotRepository();
    }
    async createChatbot(userId,data) {
        try {
            const chatbot = await this.ChatbotRepository.createChatbot({...userId,...data});
            return chatbot;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async deleteChatbot(chatbotId) {
        try {
            const response = this.ChatbotRepository.deleteChatbot(chatbotId);
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async updateChatbot(chatbotId, data) {
        try {
            const chatbot = await this.ChatbotRepository.updateChatbot(chatbotId, data);
            return chatbot;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getChatbot(chatbotId) {
        try {
            const chatbot = await this.ChatbotRepository.getChatbot(chatbotId);
            return chatbot;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getAllChatbot(userId) {
        try {
            const bots = await this.ChatbotRepository.getAllChatbot(userId);
            return bots;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
}

module.exports = ChatbotService;