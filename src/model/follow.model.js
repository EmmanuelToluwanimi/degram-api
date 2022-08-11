const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../utils/db');


const Follower = db.define('follow', {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  followerId: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Follower;