const express = require('express');

const UserController = require('../../controllers/user-controller')
const ChatbotController=require('../../controllers/chatbot-controller')
const router = express.Router();

router.post('/user', UserController.create);
router.delete('/user/:id', UserController.destroy);
router.get('/user/:id', UserController.get);
router.get('/user', UserController.getAll);
router.patch('/user/:id', UserController.update);

router.post('/users/:userId/chatbots', ChatbotController.create);
router.delete('/users/:userId/chatbots', ChatbotController.destroy);
router.get('/chatbots/:chatbotId', ChatbotController.get);
router.get('/chatbots/:chatbotId', ChatbotController.getAll);
router.patch('/chatbots/:chatbotId', ChatbotController.update);


module.exports = router;