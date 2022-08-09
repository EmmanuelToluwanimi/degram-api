const { errorResponse, okResponse } = require("../utils/constants");



const registerUserController = (req, res) => {
   
    try {
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "User registered successfully",
            data: {}
        })
    } catch (error) {
        console.log(error?.message || error);
        return errorResponse({
            res,
            status: "fail",
            message: "Error occurred while registering user",
        })
    }
}

const LoginUserController = (req, res) => {
   
    try {
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "User registered successfully",
            data: {}
        })
    } catch (error) {
        console.log(error?.message || error);
        return errorResponse({
            res,
            status: "fail",
            message: "Error occurred while registering user",
        })
    }
}

module.exports = {
    registerUserController,
    LoginUserController
}