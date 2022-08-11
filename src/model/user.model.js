const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("../utils/db");
const Follower = require("./follow.model");

const User = db.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// User.associate = (models) => {
//   // post association
  
// };

// User.hasMany(Post, { 
//   foreignKey: 'userId',
//   onDelete: 'CASCADE'
// });

User.belongsToMany(User, {
  foreignKey: "userId",
  as: "User",
  through: "Follow",
});

User.belongsToMany(User, {
  foreignKey: "followedId",
  as: "Followed",
  through: "Follow",
});

module.exports = User;
