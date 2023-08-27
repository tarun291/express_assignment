const express = require('express');

const UserController = require('../../controllers/user-controller')
const ChatbotController = require('../../controllers/chatbot-controller')
const ConversationController = require('../../controllers/conversation-controller')
const EndUserController = require('../../controllers/enduser-controller')
const router = express.Router();

router.post('/users', UserController.create);
router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.get);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.destroy);

router.post('/users/:userId/chatbots', ChatbotController.create);
router.get('/users/:userId/chatbots', ChatbotController.getAll);
router.get('/chatbots/:chatbotId', ChatbotController.get);
router.put('/chatbots/:chatbotId', ChatbotController.update);
router.delete('/chatbots/:chatbotId', ChatbotController.destroy);
router.get('/chatbots', ChatbotController.serchBots);


router.post('/chatbots/:chatbotId/conversations', ConversationController.create);
router.get('/chatbots/:chatbotId/conversations', ConversationController.getAll);
router.get('/conversations/:conversationId', ConversationController.get);
router.put('/conversations/:conversationId', ConversationController.update);
router.delete('/conversations/:conversationId', ConversationController.destroy);


router.post('/endusers', EndUserController.create);
router.get('/endusers', EndUserController.getAll);
router.get('/endusers/:endUserId', EndUserController.get);
router.put('/endusers/:endUserId', EndUserController.update);
router.delete('/endusers/:endUserId', EndUserController.destroy);



module.exports = router;