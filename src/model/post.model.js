const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../utils/db');


const Posts = db.define('Post', {
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  caption: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Posts;