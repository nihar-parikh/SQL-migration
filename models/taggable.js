"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Taggable extends Model {
    static associate(models) {
      Taggable.belongsTo(models.Image, {
        foreignKey: "taggableId",
        constraints: false,
        scope: {
          taggableType: "image",
        },
        as: "image",
      });
      Taggable.belongsTo(models.Video, {
        foreignKey: "taggableId",
        constraints: false,
        scope: {
          taggableType: "video",
        },
        as: "video",
      });
      Taggable.belongsTo(models.Tag, {
        foreignKey: "tagId",
        as: "tag",
      });
    }
  }

  Taggable.init(
    {
      tagId: DataTypes.INTEGER,
      taggableId: DataTypes.INTEGER,
      taggableType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Taggable",
    }
  );

  return Taggable;
};
