const userSchema = require("../schema/user.schema");
const { errorResponse, formatJoiMessage } = require("../utils/constants");

const validateInput = (req, res, next)=>{

    const {error} = userSchema.validate(req.body);
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

module.exports = validateInput;