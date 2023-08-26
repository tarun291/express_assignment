const ConversationRepository = require('../repository/conversation-repository');


class ConversationService {
    constructor() {
        this.ConversationRepository = new ConversationRepository();
    }
    async createConversation(data) {
        try {
            const Conversation = await this.ConversationRepository.createConversation(data);
            return Conversation;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async deleteConversation(ConversationId) {
        try {
            const response = this.ConversationRepository.deleteConversation(ConversationId);
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async updateConversation(ConversationId, data) {
        try {
            const Conversation = await this.ConversationRepository.updateConversation(ConversationId, data);
            return Conversation;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getConversation(ConversationId) {
        try {
            const Conversation = await this.ConversationRepository.getConversation(ConversationId);
            return Conversation;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getAllConversation(filter) {
        try {
            const cities = await this.ConversationRepository.getAllConversation({ name: filter.name });
            return cities;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
}

module.exports = ConversationService;