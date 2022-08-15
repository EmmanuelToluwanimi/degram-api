const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("../utils/db");
const Conversation = require("./conversation.model");
const Follower = require("./follow.model");
const Posts = require("./post.model");


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

User.hasMany(Posts);
Posts.belongsTo(User)

User.hasMany(Conversation);
Conversation.belongsTo(User, { as: "user1" });
Conversation.belongsTo(User, { as: "user2" });


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
