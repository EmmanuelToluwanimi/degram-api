const Message = require("../model/message.model");

const storeMessage = async (message) => {
    try {
        return await Message.create(message);
    } catch (error) {
        throw error;
    }
}

const getMessages = async (conversationId) => {
    try {
        return await Message.findAll({
            where: {
                conversationId: conversationId
            }
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    storeMessage,
    getMessages
}

