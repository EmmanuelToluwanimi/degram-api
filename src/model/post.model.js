const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../utils/db');


const Posts = db.define('Post', {
//   userId: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
  imgUrl: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  caption: {
    type: DataTypes.STRING,
    // allowNull: false,
  }
});

module.exports = Posts;