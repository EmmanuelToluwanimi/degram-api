const User = require("../model/user.model");
const { follow, findUserById, findFollowers, unfollow, findFollowing, isFollowing } = require("../repo/user.repo");

const addFollower = async(userId, followerId) => {
    
    try {
     
        if (userId == followerId) {
            return {
                message: "Oops, you can't follow yourself",
                statusCode: 400
            }
        }

        const follower = await findUserById(followerId)
        if (!follower) {
            return {
                message: "User not found",
                statusCode: 404
            }
        }

        const check = await isFollowing(userId, followerId);
        if (check) {
            return {
                message: "Oops, you are already following this user",
                statusCode: 400
            }
        }
        
        await follow({
            userId,
            followerId
        });

        const followings = await findFollowing(userId);
        return {
            followings,
        }

    } catch (error) {
        throw error
    }
}

const removeFollower = async(userId, followerId) => {
    try {

        if (userId === followerId) {
            return {
                message: "Oops, you can't unfollow yourself",
                statusCode: 400
            }
        }

        const follower = await findUserById(followerId)
        if (!follower) {
            return {
                message: "User not found",
                statusCode: 404
            }
        }
        
        await unfollow({
            userId,
            followerId
        });

        const followings = await findFollowing(userId);
        return {
            followings,
        }

    } catch (error) {
        throw error
    }
}

const allFollowers = async(userId) => {
    try {
        const followers = await findFollowers(userId);
        return {
            followers,
        }

    } catch (error) {
        throw error
    }
}

const allFollowing = async(userId) => {
    try {
        const followings = await findFollowing(userId);
        return {
            followings,
        }

    } catch (error) {
        throw error
    }
}

const userProfile = async(userId) => {
    try {
        const user = await findUserById(userId);
        return {
            user,
        }

    } catch (error) {
        throw error
    }
}

module.exports = {
    addFollower,
    removeFollower,
    allFollowers,
    allFollowing,
    userProfile,
}