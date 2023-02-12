const seedBlogs = require('./blog-seeds');
// const seedComments = require('./comment-seeds');
// const seedUsers = require('./user-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  console.log('syncing things');
  await sequelize.sync({ force: false });
  console.log(`\n database is in sync\n`);
  await seedBlogs();
  console.log('\n blogs are in sync\n');
  // await seedComments();
  // console.log('\n comments are in sync\n');
  // await seedUsers();
  // console.log('\n users are in sync\n');
  
  process.exit(0);
};

seedAll();