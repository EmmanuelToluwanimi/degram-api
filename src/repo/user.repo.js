const Follower = require("../model/follow.model");
const User = require("../model/user.model");


const storeUser = async (user) => {
    return await User.create(user);
}

const findUserByUsername = async (username) => {
    return await User.findOne({
        where: {
            username
        }
    });
}

const findUserById = async (id) => {
    return await User.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt']
        }
    });
}

const follow = async (user, followed) => {
    return await user.addUser(followed);
}

const unfollow = async (data) => {
    return await Follower.destroy({
        where: {
            userId: data.userId,
            followedId: data.followedId
        }
    });
}


const isFollowing = async (userId, followedId) => {
    try {
        
        const check = await Follower.findOne({
            where: {
                userId,
                followedId,
            },
        });
        return check ? true : false;
    } catch (error) {
        throw error;
    }
};

const findFollowing = async (user) => {
    return await user.getUser({
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt']
        }
    });
}

const findFollowers = async (user) => {
    return await user.getFollowed({
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt']
        }
    })
}


module.exports = {
    storeUser,
    findUserByUsername,
    findUserById,
    follow,
    unfollow,
    findFollowers,
    findFollowing,
    isFollowing
}