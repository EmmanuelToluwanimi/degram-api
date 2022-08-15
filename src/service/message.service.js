const { createConversation } = require("../repo/conversation.repo");
const { getMessages, storeMessage } = require("../repo/message.repo");
const { initiateConversation } = require("./conversation.service");


const retrieveMessages = async (conversationId) => {
    try {
        const chats = await getMessages(conversationId);
        if (!chats) {
            return {
                chats: [],
            }
        }

        return {
            chats
        }
    } catch (error) {
        throw error;
    }
}

const sendMessage = async (data) => {
    const {senderId, receiverId} = data
    try {
        const {conversation} = await initiateConversation(senderId, receiverId);
        const newMessage = await storeMessage({...data, conversationId: conversation.id});
        return {
            chat: newMessage,
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    retrieveMessages,
    sendMessage
}