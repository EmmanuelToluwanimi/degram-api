const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("../utils/db");

const Message = db.define("Message", {
//   conversationId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
  senderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  receiverId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Message;
