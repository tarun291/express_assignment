const express = require('express');

const UserController=require('../../controllers/user-controller')
const router = express.Router();

router.post('/user', UserController.create);
router.delete('/user/:id', UserController.destroy);
router.get('/user/:id', UserController.get);
router.get('/user', UserController.getAll);
router.patch('/user/:id', UserController.update);
module.exports = router;