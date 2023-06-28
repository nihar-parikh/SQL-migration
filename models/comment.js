// "use strict";
// const { Model } = require("sequelize");
// const Sequelize = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
//   class Comment extends Model {
//     static associate(models) {
//       Comment.belongsTo(models.User, {
//         foreignKey: "userId",
//         as: "user",
//       });
//       Comment.belongsTo(models.Image, {
//         foreignKey: "commentableId",
//         constraints: false,
//         scope: {
//           commentableType: "image",
//         },
//         as: "image",
//       });
//       Comment.belongsTo(models.Video, {
//         foreignKey: "commentableId",
//         constraints: false,
//         scope: {
//           commentableType: "video",
//         },
//         as: "video",
//       });
//     }
//   }

//   Comment.init(
//     {
//       id: {
//         type: Sequelize.UUID,
//         defaultValue: Sequelize.UUIDV4,
//         primaryKey: true,
//         unique: true,
//       },
//       title: DataTypes.STRING,
//       commentableId: {
//         field: "commentableId",
//         type: Sequelize.UUID,
//         references: {
//           model: "images",
//           key: "id",
//         },
//       },
//       commentableType: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "Comment",
//     }
//   );

//   return Comment;
// };

("use strict");
const { Model } = require("sequelize");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
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
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
      },
      commentableId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      commentableType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );

  return Comment;
};
