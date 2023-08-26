const Conversation = require('../models/conversation')

class ConversationRepository {
    async createConversation(data) { //{name:"Agra"}
        try {
            console.log(data)
            const Conversation = await Conversation.create(data)
            return Conversation;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async deleteConversation(ConversationId) {
        console.log(ConversationId);
        try {
            await Conversation.destroy({
                where: {
                    id: ConversationId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async updateConversation(ConversationId, data) {  //{name:"Delhi"} data is an object form here
        try {
            // below approach also work but will not return updated obkject
            // If you are using PG sequal then returning true can be used, else not
            /* const Conversation = await Conversation.update(data, {
                where: {
                    id: ConversationId
                },
             })*/
            /* This approach will return apdated objct also in MySQL*/
            const Conversation = await Conversation.findByPk(ConversationId);
            Conversation.name = data.name;
            await Conversation.save();
            return Conversation;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async getConversation(ConversationId) {
        try {
            const Conversation = await Conversation.findByPk(ConversationId);
            return Conversation;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
    async getAllConversation(filter) { // filter can be a empty  also
        try {
            if (filter.name) {
                console.log(filter.name)
                const cities = await Conversation.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                // console.log(cities);
                return cities;
            }
            const cities = await Conversation.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = ConversationRepository;