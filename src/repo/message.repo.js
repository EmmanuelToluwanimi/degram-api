const Conversation = require("../model/conversation.model");
const Message = require("../model/message.model");
const User = require("../model/user.model");

const storeMessage = async (conversation, message) => {
  try {
    return await conversation.createMessage(message, {
        include: [
            {
              model: Conversation,
              include: [
                {
                  model: User,
                  as: "user1",
                  attributes: {
                    exclude: ["password", "createdAt", "updatedAt"],
                  },
                },
                {
                  model: User,
                  as: "user2",
                  attributes: {
                    exclude: ["password", "createdAt", "updatedAt"],
                  },
                },
              ],
            },
          ],
    });
  } catch (error) {
    throw error;
  }
};

const getMessages = async (conversationId) => {
  try {
    return await Message.findAll({
      where: {
        conversationId: conversationId,
      },
      include: [
        {
          model: Conversation,
          include: [
            {
              model: User,
              as: "user1",
              attributes: {
                exclude: ["password", "createdAt", "updatedAt"],
              },
            },
            {
              model: User,
              as: "user2",
              attributes: {
                exclude: ["password", "createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  storeMessage,
  getMessages,
};
