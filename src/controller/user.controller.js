const { errorResponse, okResponse } = require("../utils/constants");



const followController = (req, res) => {
   
    try {
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: {}
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

const unfollowController = (req, res) => {
   
    try {
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: {}
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

const getAllFollowersController = (req, res) => {
   
    try {
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: {}
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

const getAllFollowingController = (req, res) => {
   
    try {
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: {}
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

const getUserInfoController = (req, res) => {
   
    try {
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: {}
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
    followController,
    unfollowController,
    getAllFollowersController,
    getAllFollowingController,
    getUserInfoController
}