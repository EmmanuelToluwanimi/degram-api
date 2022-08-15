const messageSchema = require("../schema/message.schema");

const validateMessageInput = (req, res, next) => {

    const { error } = messageSchema.validate(req.body);
    if (error?.message) {
        const message = formatJoiMessage(error.message);
        console.log(error?.message || error);
        return errorResponse({
            res,
            statusCode: 422,
            status: "fail",
            message
        })
    }

    next();
}

module.exports = { validateMessageInput };