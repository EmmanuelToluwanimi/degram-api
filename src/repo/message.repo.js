const Conversation = require("../model/conversation.model");
const Message = require("../model/message.model");


const storeMessage = async (conversation, message) => {
    try {
        return await conversation.createMessage(message);
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

