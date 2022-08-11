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

User.associate = (models) => {
  // post association

  User.belongsToMany(models.User, {
    foreignKey: "userId",
    as: "followers",
    through: models.UserFollowers,
  });

  User.belongsToMany(models.User, {
    foreignKey: "followerId",
    as: "following",
    through: models.UserFollowers,
  });
};

module.exports = User;
