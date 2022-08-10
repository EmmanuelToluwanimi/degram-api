const { errorResponse, okResponse, generateUid } = require("../utils/constants");
const User = require("../model/user.model");
const { createUser, loginUser } = require("../service/auth.service");



const registerUserController = async (req, res) => {
   
    try {
        const {message, statusCode, user, accessToken} = await createUser(req.body);
        if(message){
            return errorResponse({
                res,
                status: 'fail',
                statusCode,
                message
            })
        }

        if (accessToken) {
            res.setHeader("x-token", accessToken);
        }

        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "User registered successfully",
            data: user
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

const LoginUserController = async(req, res) => {
   
    try {

        const {message, statusCode, user, accessToken} = await loginUser(req.body);
        if(message){
            return errorResponse({
                res,
                status: 'fail',
                statusCode,
                message
            })
        }

        if (accessToken) {
            res.setHeader("x-token", accessToken);
        }

        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "User registered successfully",
            data: user
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