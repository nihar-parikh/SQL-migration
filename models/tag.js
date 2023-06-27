"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      Tag.belongsToMany(models.Image, {
        through: "Taggable",
        foreignKey: "tagId",
        constraints: false,
        scope: {
          taggableType: "image",
        },
        as: "images",
      });
      Tag.belongsToMany(models.Video, {
        through: "Taggable",
        foreignKey: "tagId",
        constraints: false,
        scope: {
          taggableType: "video",
        },
        as: "videos",
      });
    }
  }

  Tag.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );

  return Tag;
};
