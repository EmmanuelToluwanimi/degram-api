const { errorResponse, okResponse } = require("../utils/constants");


const createPostController = (req, res) => {
   
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

const getAllPostsController = (req, res) => {
   
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
    createPostController,
    getAllPostsController
}