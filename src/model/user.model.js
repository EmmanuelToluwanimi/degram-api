const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../utils/db');


const User = db.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = User;