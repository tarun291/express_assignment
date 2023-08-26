const ChatbotService = require('../services/chatbot-service');


const chatbotService = new ChatbotService();

const create = async (req, res) => {
    try {
        const Chatbot = await chatbotService.createChatbot(req.body);
        return res.status(201).json({
            data: Chatbot,
            sucess: true,
            message: 'Successfully created a Chatbot',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to create a Chatbot',
            err: error
        })
    }
}
// DELETE -> /Chatbot/:id

const destroy = async (req, res) => {
    try {
        const response = await chatbotService.deleteChatbot(req.params.id);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Successfully deleted a Chatbot',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to delete the Chatbot',
            err: error,
        })
    }
}
const get = async (req, res) => {
    try {
        const response = await chatbotService.getChatbot(req.params.id);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Successfully fetched a Chatbot',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to get the Chatbot',
            err: error,
        })
    }
}

// -> /Chatbot/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await chatbotService.updateChatbot(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'A Chatbot successfully updated ',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to update the Chatbot',
            err: error,
        })
    }
}
const getAll = async (req, res) => {
    try {
        const cities = await chatbotService.getAllChatbot(req.query);
        console.log(req.query);
        return res.status(200).json({
            data: cities,
            sucess: true,
            message: 'All Chatbot fetched sucessfully ',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to fetch the cities',
            err: error,
        })
    }
}
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}