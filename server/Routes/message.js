const express = require('express');
const { createMessage, getAllMessages, getMessageById, deleteMessage, getMessagesByUser, updateMessage } = require('../Controller/message.js');

const router = express.Router()

router.post('/', createMessage);
router.get('/', getAllMessages);
router.get('/:_id', getMessageById);
router.get('/', getMessagesByUser);
router.put('/:_id', updateMessage);
router.delete('/:_id', deleteMessage);

module.exports = router;
