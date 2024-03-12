const Messages = require("../model/message.js");

const createMessage = async (req, res) => {
    try {
        const { sender, receiver, content } = req.body;
        
        const newMessage = Messages({ sender, receiver, content });
        await newMessage.save();

        return res.status(201).json({ msg: "Message Created Successfully" });
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while creating the message" });
    }
}

const getMessageById = async (req, res) => {
    try {
        const messageId = req.params._id;
        const message = await Messages.findById(messageId);

        if (!message) {
            return res.status(404).json({ msg: "Message not found" });
        }

        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while fetching the message" });
    }
}

const getAllMessages = async (req, res) => {
    try {
        const allMessages = await Messages.find({}).sort({ timestamp: 'asc' });

        return res.status(200).json(allMessages);
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while fetching all messages" });
    }
}

const getMessagesByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const messages = await messages.find({ $or: [{ sender: userId }, { receiver: userId }] })
            .sort({ timestamp: 'asc' });

        return res.status(200).json(messages);
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while fetching messages" });
    }
}

const updateMessage = async (req, res) => {
    try {
        const messageId = req.params._id;
        const updatedMessage = await Messages.findByIdAndUpdate(messageId, req.body, {
            new: true
        });

        if (!updatedMessage) {
            return res.status(400).json({ msg: "No Message Found" });
        }

        return res.status(200).json(updatedMessage);

    } catch (error) {
        return res.status(500).json({ error: "An error occurred while updating the message" });
    }
}

const deleteMessage = async (req, res) => {
    try {
        const messageId = req.params._id;
        const deletedMessage = await Messages.findByIdAndDelete(messageId);

        if (!deletedMessage) {
            return res.status(400).json({ msg: "No Message Found" });
        }

        return res.status(200).json({ msg: "Message Deleted Successfully" });

    } catch (error) {
        return res.status(500).json({ error: "An error occurred while deleting the message" });
    }
}

module.exports = {
    createMessage,
    getMessageById,
    getMessagesByUser,
    getAllMessages,
    updateMessage,
    deleteMessage,
}
  
