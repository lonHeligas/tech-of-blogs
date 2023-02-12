const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// console.log(`hello from Blogposts.js!`)
class Blogposts extends Model {}

Blogposts.init (
  {
    id: {
      type: DataTypes.INTEGER,  
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,            
    },
    author_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'user',
      //   key: 'id',
      // }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

  },
  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'blogposts',
  }
);

module.exports = Blogposts;