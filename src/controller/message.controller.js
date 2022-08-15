const { retrieveMessages, sendMessage } = require("../service/message.service");
const { okResponse, errorResponse } = require("../utils/constants");

const sendMessageController = async (req, res) => {
    try {
        const {chat, message, statusCode} = await sendMessage(req.body);
        if(message){
            return errorResponse({
                res,
                status: 'fail',
                statusCode,
                message
            })
        }

        return okResponse({
            res,
            status: "success",
            statusCode: 201,
            message: "Successful request",
            data: chat
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

const retrieveMessagesController = async (req, res) => {
    const { id } = req.params;
    try {
        const {chats} = await retrieveMessages(id);
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: chats
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
    sendMessageController,
    retrieveMessagesController,
}