const express = require('express');
const router = express.Router();
const messageController = require('../Controllers/messageController.js');

router.get('/', messageController.getAllMessages);

// Define a different route for message creation
router.post('/', messageController.createMessage);

router.get('/:id', messageController.getMessageById);

router.patch('/:id', messageController.updateMessageById);

router.delete('/:id', messageController.deleteMessageById);

module.exports = router;
