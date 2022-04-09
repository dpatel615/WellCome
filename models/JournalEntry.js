// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize JournalEntry model (table) by extending off Sequelize's Model class
class JournalEntry extends Model {}

// set up fields and rules for Journal model
JournalEntry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      date_created: {
      type:DataTypes.DATEONLY,
      allowNull:false
    },
    thoughts: {
      type:DataTypes.STRING,
      allowNull:false
    },
    user_id:{
      type: DataTypes.INTEGER,
      references:{
        model:'user',
        key: 'id',
      }

    }
  },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'journalentry',
  }
);

module.exports = JournalEntry;