const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../utils/db');


const Follower = db.define('Follow', {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  followedId: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Follower;