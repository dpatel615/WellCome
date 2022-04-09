// import models
const Content = require('./Content');
const JournalEntry = require('./JournalEntry');
const User = require('./User');

// 
User.hasMany(JournalEntry, {
  foreignKey: 'user_id',
});

// 
JournalEntry.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = {
  Content,
  JournalEntry,
  User,
};
