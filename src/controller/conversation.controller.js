const { getAllConversations, getSingleConversation } = require("../service/conversation.service");
const { okResponse, errorResponse } = require("../utils/constants");

const getAllConversationsController = async (req, res) => {
    const { id } = req?.user;
    try {
        const {conversations} = await getAllConversations(id);
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: conversations
        })
    } catch (error) {
        console.log(error?.message || error);
        return errorResponse({
            res,
            status: "fail",
            message: "Error occurred while processing request",
        })
    }
}

const getSingleConversationController = async (req, res) => {
    const { id: userId } = req?.user;
    const { id } = req.params;
    try {
        const {conversation} = await getSingleConversation(userId, id);
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: conversation
        })
    } catch (error) {
        console.log(error?.message || error);
        return errorResponse({
            res,
            status: "fail",
            message: "Error occurred while processing request",
        })
    }
}

module.exports = {
    getAllConversationsController,
    getSingleConversationController
}