const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id:{
      type: DataTypes.INTEGER,
      references:{
        model: "user",
        key: "id"
      }
    }
  },
  {
    sequelize,
    freezeTableName: true, 
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
