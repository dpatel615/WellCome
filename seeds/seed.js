const sequelize = require('../config/connection');
const { User, Content, Favorite } = require('../models');

const userData = require('./userData.json');
const contentData = require('./contentData.json');
const favData = require('./favoriteData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const content of contentData) {
    await Content.create({
      ...content,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const favorite of favData) {
    await Favorite.create({
      ...favorite,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
