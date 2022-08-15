const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../utils/db');
const Message = require('./message.model');


const Conversation = db.define('Conversation', {
    user1Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user2Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

Conversation.hasMany(Message);
Message.belongsTo(Conversation);

module.exports = Conversation;