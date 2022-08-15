const { createConversation, getConversation, getUserConversations } = require("../repo/conversation.repo");

const initiateConversation = async (user1Id, user2Id) => {
    try {
        const existingConversation = await getConversation(user1Id, user2Id);
        if (existingConversation) {
            return {
                conversation: existingConversation
            };
        }
        const newConversation = await createConversation(user1Id, user2Id);
        return {
            conversation: newConversation
        }
    } catch (error) {
        throw error;
    }
}

const getAllConversations = async (userId) => {
    try {
        const conversations = await getUserConversations(userId);
        return {
            conversations
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    initiateConversation,
    getAllConversations,
}