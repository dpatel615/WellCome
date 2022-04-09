// import models
const Content = require('./Content');
const JournalEntry = require('./JournalEntry');
const Favorite = require('./Favorite');
const User = require('./User');

// User has many journal entries
User.hasMany(JournalEntry, {
  foreignKey: 'user_id',
});

// One journal entry belongs to user
JournalEntry.belongsTo(User, {
  foreignKey: 'user_id',
});

// User has many favorites
User.belongsToMany(Content, {
  through: {
      model: Favorite,
      unique: false,
  },
  as: 'Favorites'
});

// Many favorites belong to one user
Content.belongsToMany(User, {
  through: {
      model: Favorite,
      unique: false,
  },
  as: 'Viewers'
});


module.exports = {
  Content,
  JournalEntry,
  Favorite,
  User,
};
