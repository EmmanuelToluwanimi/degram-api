const Joi = require("joi");

const postSchema = Joi.object({
    imgUrl: Joi.string().allow(""),
    caption: Joi.string().allow(""),
})

module.exports = postSchema;