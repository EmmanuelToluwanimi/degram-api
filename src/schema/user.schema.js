const Joi = require("joi");

const userSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required().min(6),
})

module.exports = userSchema;