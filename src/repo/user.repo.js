const User = require("../model/user.model");


const storeUser = async (user) => {
    return await User.create(user);
}

const findUserByUsername = async (username) => {
    return await User.findOne({username});
}

const findUserByUid = async (uid) => {
    return await User.findOne({uid});
}


module.exports = {
    storeUser,
    findUserByUsername,
    findUserByUid
}