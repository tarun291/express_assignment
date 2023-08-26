const ConversationRepository = require('../repository/conversation-repository');


class ConversationService {
    constructor() {
        this.conversationRepository = new ConversationRepository();
    }
    async createConversation(chatbotId, data) {
        try {
            console.log(chatbotId, data);
            const conversation = await this.conversationRepository.createConversation({ ...chatbotId, ...data });
            return conversation;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async deleteConversation(conversationId) {
        try {
            const response = this.conversationRepository.deleteConversation(conversationId);
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async updateConversation(conversationId, data) {
        try {
            const Conversation = await this.conversationRepository.updateConversation(conversationId, data);
            return Conversation;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getConversation(conversationId) {
        try {
            const conversation = await this.conversationRepository.getConversation(conversationId);
            return conversation;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getAllConversation(chatbotId, query) {
        try {
            const conversations = await this.conversationRepository.getAllConversation(chatbotId, query?.page, query?.limit);
            return conversations;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
}

module.exports = ConversationService;