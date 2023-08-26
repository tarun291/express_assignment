const ChatbotRepository = require('../repository/chatbot-repository');


class ChatbotService {
    constructor() {
        this.ChatbotRepository = new ChatbotRepository();
    }
    async createChatbot(data) {
        try {
            const Chatbot = await this.ChatbotRepository.createChatbot({ name: data.name });
            return Chatbot;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async deleteChatbot(ChatbotId) {
        try {
            const response = this.ChatbotRepository.deleteChatbot(ChatbotId);
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async updateChatbot(ChatbotId, data) {
        try {
            const Chatbot = await this.ChatbotRepository.updateChatbot(ChatbotId, data);
            return Chatbot;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getChatbot(ChatbotId) {
        try {
            const Chatbot = await this.ChatbotRepository.getChatbot(ChatbotId);
            return Chatbot;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getAllChatbot(filter) {
        try {
            const cities = await this.ChatbotRepository.getAllChatbot({ name: filter.name });
            return cities;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
}

module.exports = ChatbotService;