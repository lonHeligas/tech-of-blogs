const { Category } = require('../models');

const CategoryData = [
  {
    "username": "lon",
    "email": "lon.heligas@gmail.com",
    "password": "guest"
  },
  {
    "username": "daisyskye",
    "email": "djohnson@shield.org",
    "password": "quake"
  },
  {
    "username": "zephyrone",
    "email": "sonofcoul@shield.org",
    "password": "toldja"
  }
]
const seedUsers = () => Category.bulkCreate(CategoryData);

module.exports = seedUsers;