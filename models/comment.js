"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      Comment.belongsTo(models.Image, {
        foreignKey: "commentableId",
        constraints: false,
        scope: {
          commentableType: "image",
        },
        as: "image",
      });
      Comment.belongsTo(models.Video, {
        foreignKey: "commentableId",
        constraints: false,
        scope: {
          commentableType: "video",
        },
        as: "video",
      });
    }
  }

  Comment.init(
    {
      title: DataTypes.STRING,
      commentableId: DataTypes.INTEGER,
      commentableType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );

  return Comment;
};
