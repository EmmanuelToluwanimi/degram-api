const { retrieveMessages, sendMessage } = require("../service/message.service");

const sendMessageController = async (req, res) => {
    const { message: convo } = req.body;
    try {
        const {chat} = await sendMessage(convo);
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