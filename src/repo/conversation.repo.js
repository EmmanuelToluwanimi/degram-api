const { Op } = require("sequelize");
const Conversation = require("../model/conversation.model");
const User = require("../model/user.model");

const getConversation = async (user1Id, user2Id) => {
    try {
        return await Conversation.findOne({
            where: {
                user1Id: {
                  [Op.or]: [user1Id, user2Id],
                },
                user2Id: {
                  [Op.or]: [user1Id, user2Id],
                },
            },
        });
    } catch (error) {
        throw error;
    }
}

const createConversation = async (user1Id, user2Id) => {
    try {
        return await Conversation.create({
            user1Id,
            user2Id,
        });
    } catch (error) {
        throw error;
    }
}

const getUserConversations = async (userId) => {
    try {
        return await Conversation.findAll({
            where: {
                [Op.or]: [
                    {user1Id: userId},
                    {user2Id: userId},
                ]
            },
            include: [{
                model: User,
                as: 'user1',
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt']
                }
            }, {
                model: User,
                as: 'user2',
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt']
                }
            }],
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getConversation,
    createConversation,
    getUserConversations
}