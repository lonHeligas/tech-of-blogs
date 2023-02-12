const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blogposts',
        key: 'id',
      }
    },
    commentauthor_id: {
    type: DataTypes.INTEGER,
    allowNull:  false,
    references: {
      model: 'users',
      key: 'id',
      unique: false
    }
    },
    comment_body: {
      type: DataTypes.STRING,
      allowNull: false,
    }
 
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
)

module.exports = Comments;