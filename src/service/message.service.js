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
        if(senderId === receiverId) {
            return {
                message: "You cannot send message to yourself",
                statusCode: 400,
            }
        }

        const {conversation} = await initiateConversation(senderId, receiverId);
        const newMessage = await storeMessage(conversation, data)
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