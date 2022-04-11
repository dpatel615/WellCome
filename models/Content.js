// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Content model (table) by extending off Sequelize's Model class
class Content extends Model {}

// set up fields and rules for Content model
Content.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type:DataTypes.STRING,
      allowNull:false
    },
    content_path: {
      type:DataTypes.STRING,
      allowNull:false
    },
      video_id: {
      type:DataTypes.STRING,
      allowNull:false
    }
  },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'content',
  }
);

module.exports = Content;
