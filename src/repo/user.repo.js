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

const follow = async (data) => {
    return await Follower.create(data);
}

const unfollow = async (data) => {
    return await Follower.destroy({
        where: {
            userId: data.userId,
            followerId: data.followerId
        }
    });
}


const isFollowing = async (userId, followerId) => {
    try {
        
        const check = await Follower.findOne({
            where: {
                userId,
                followerId,
            },
        });
        return check ? true : false;
    } catch (error) {
        throw error;
    }
};

const findFollowing = async (userId) => {
    return await Follower.findAll({
        where: {
            userId
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    });
}

const findFollowers = async (followerId) => {
    return await Follower.findAll({
        where: {
            followerId
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    });
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