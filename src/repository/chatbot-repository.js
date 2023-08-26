const Chatbot = require('../models/chatbot')

class ChatbotRepository {
    async createChatbot({ name }) { //{name:"Agra"}
        try {
            const Chatbot = await Chatbot.create({
                name: name //name
            })
            return Chatbot;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async deleteChatbot(ChatbotId) {
        console.log(ChatbotId);
        try {
            await Chatbot.destroy({
                where: {
                    id: ChatbotId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async updateChatbot(ChatbotId, data) {  //{name:"Delhi"} data is an object form here
        try {
            // below approach also work but will not return updated obkject
            // If you are using PG sequal then returning true can be used, else not
            /* const Chatbot = await Chatbot.update(data, {
                where: {
                    id: ChatbotId
                },
             })*/
            /* This approach will return apdated objct also in MySQL*/
            const Chatbot = await Chatbot.findByPk(ChatbotId);
            Chatbot.name = data.name;
            await Chatbot.save();
            return Chatbot;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async getChatbot(ChatbotId) {
        try {
            const Chatbot = await Chatbot.findByPk(ChatbotId);
            return Chatbot;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
    async getAllChatbot(filter) { // filter can be a empty  also
        try {
            if (filter.name) {
                console.log(filter.name)
                const cities = await Chatbot.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                // console.log(cities);
                return cities;
            }
            const cities = await Chatbot.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = ChatbotRepository;