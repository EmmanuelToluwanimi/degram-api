const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../utils/db');
const Message = require('./message.model');


const Conversation = db.define('Conversation', {});

Conversation.hasMany(Message);
Message.belongsTo(Conversation);

module.exports = Conversation;