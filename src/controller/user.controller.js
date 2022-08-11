const { addFollower, allFollowing, allFollowers, removeFollower, userProfile } = require("../service/user.service");
const { errorResponse, okResponse } = require("../utils/constants");



const followController = async (req, res) => {

    const { id: userId } = req?.user;
    const { id: followerId } = req.params;
   
    try {

        const {message, statusCode, followings} = await addFollower(userId, followerId);
        if (message) {
            return errorResponse({
                res,
                status: "fail",
                message,
                statusCode
            })
        }

        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: {
                followingsCount: followings.length,
                followings,
            }
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

const unfollowController = async (req, res) => {

    const { id: userId } = req?.user;
    const { id: followerId } = req.params;
   
    try {
        const {message, statusCode, followings} = await removeFollower(userId, followerId);
        if (message) {
            return errorResponse({
                res,
                status: "fail",
                message,
                statusCode
            })
        }

        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: {
                followingsCount: followings.length,
                followings,
            }
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

const getAllFollowersController = async (req, res) => {
   
    try {
        const {id} = req?.user;

        const {message, statusCode, followers} = await allFollowers(id);
        if (message) {
            return errorResponse({
                res,
                status: "fail",
                message,
                statusCode
            })
        }

        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: {
                followersCount: followers.length,
                followers,
            }
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

const getAllFollowingController = async (req, res) => {
   
    try {
        const {id} = req?.user;

        const {message, statusCode, followings} = await allFollowing(id);
        if (message) {
            return errorResponse({
                res,
                status: "fail",
                message,
                statusCode
            })
        }

        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: {
                followingsCount: followings.length,
                followings,
            }
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

const getUserInfoController = async (req, res) => {
    const { id } = req.params;
    try {
        const {message, statusCode, user} = await userProfile(id);
        if (message) {
            return errorResponse({
                res,
                status: "fail",
                message,
                statusCode
            })
        }

        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: user
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