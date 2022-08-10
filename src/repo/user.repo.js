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

const findUserByUid = async (uid) => {
    return await User.findOne({
        where: {
            uid
        }
    });
}


module.exports = {
    storeUser,
    findUserByUsername,
    findUserByUid
}