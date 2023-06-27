"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    static associate(models) {
      Video.hasMany(models.Comment, {
        foreignKey: "commentableId",
        constraints: false,
        scope: {
          commentableType: "video",
        },
        as: "comments",
      });
      Video.belongsToMany(models.Tag, {
        through: "Taggable",
        foreignKey: "taggableId",
        constraints: false,
        scope: {
          taggableType: "video",
        },
        as: "tags",
      });
    }
  }

  Video.init(
    {
      title: DataTypes.STRING,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Video",
    }
  );

  return Video;
};
