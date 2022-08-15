const Joi = require("joi");

const messageSchema = Joi.object({
    senderId: Joi.string().required(),
    receiverId: Joi.string().required(),
    text: Joi.string().required(),
})

module.exports = messageSchema;