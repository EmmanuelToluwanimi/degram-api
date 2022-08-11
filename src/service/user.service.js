const User = require("../model/user.model");
const { follow, findUserById, findFollowers, unfollow, findFollowing, isFollowing } = require("../repo/user.repo");

const addFollower = async(userId, followedId) => {
    
    try {
     
        if (userId == followedId) {
            return {
                message: "Oops, you can't follow yourself",
                statusCode: 400
            }
        }

        const follower = await findUserById(followedId)
        if (!follower) {
            return {
                message: "User not found",
                statusCode: 404
            }
        }

        const check = await isFollowing(userId, followedId);
        // console.log("check", check);
        if (check) {
            return {
                message: "Oops, you are already following this user",
                statusCode: 400
            }
        }

        const currentUser = await findUserById(userId);
        
        await follow(currentUser, follower);

        const followings = await findFollowing(currentUser);
        // const followings = await currentUser.getUser()
        // console.log("followings", followings);
        return {
            followings,
        }

    } catch (error) {
        throw error
    }
}

const removeFollower = async(userId, followedId) => {
    try {

        if (userId == followedId) {
            return {
                message: "Oops, you can't unfollow yourself",
                statusCode: 400
            }
        }

        const follower = await findUserById(followedId)
        if (!follower) {
            return {
                message: "User not found",
                statusCode: 404
            }
        }
        
        await unfollow({
            userId,
            followedId
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
        const user = await findUserById(userId)
        const followings = await findFollowing(user);
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