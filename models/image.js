"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.hasMany(models.Comment, {
        foreignKey: "commentableId",
        constraints: false,
        scope: {
          commentableType: "image",
        },
        as: "comments",
      });
      Image.belongsToMany(models.Tag, {
        through: "Taggable",
        foreignKey: "taggableId",
        constraints: false,
        scope: {
          taggableType: "image",
        },
        as: "tags",
      });
    }
  }

  Image.init(
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Image",
    }
  );

  return Image;
};
