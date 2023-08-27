const ConversationService = require('../services/conversation-service');


const conversationService = new ConversationService();

const create = async (req, res) => {
    try {
        const conversation = await conversationService.createConversation(req.params,req.body);
        return res.status(201).json({
            data: conversation,
            sucess: true,
            message: 'Successfully created a Conversation',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to create a Conversation',
            err: error
        })
    }
}


const destroy = async (req, res) => {
    try {
        const response = await conversationService.deleteConversation(req.params.conversationId);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Successfully deleted a Conversation',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to delete the Conversation',
            err: error,
        })
    }
}
const get = async (req, res) => {
    try {
        const response = await conversationService.getConversation(req.params.conversationId);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Successfully fetched a Conversation',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to get the Conversation',
            err: error,
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await conversationService.updateConversation(req.params.conversationId, req.body);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'A Conversation successfully updated ',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to update the Conversation',
            err: error,
        })
    }
}
const getAll = async (req, res) => {
    try {
        const cities = await conversationService.getAllConversation(req.params.chatbotId,req.query);
        return res.status(200).json({
            data: cities,
            sucess: true,
            message: 'All Conversation fetched sucessfully ',
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