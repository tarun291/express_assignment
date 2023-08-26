const Conversation = require('../models/conversation')

class ConversationRepository {
    async createConversation(data) { //{name:"Agra"}
        try {
            console.log(data)
            const conversation = await Conversation.create(data)
            return conversation;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async deleteConversation(conversationId) {
        console.log(conversationId);
        try {
            await Conversation.destroy({
                where: {
                    conversationId: conversationId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async updateConversation(conversationId, data) { 
        try {
           
            const conversation = await Conversation.update(data, {
                where: {
                    conversationId: conversationId
                },
            })
            return conversation;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async getConversation(conversationId) {
        try {
            const conversation = await Conversation.findByPk(conversationId);
            return conversation;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
    async getAllConversation(chatbotId) { // filter can be a empty  also
        try {
                const conversation = await Conversation.findAll({
                    where: {
                        chatbotId:chatbotId
                    }
                })
                return conversation;
            }
         catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = ConversationRepository;