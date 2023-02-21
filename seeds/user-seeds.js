const { Users } = require('../models');

const UserData = [
  {
    "id": "1",
    "username": "lon",
    "email": "lon.heligas@gmail.com",
    "password": "guest"
  },
  {
    "id": "2",
    "username": "daisyskye",
    "email": "djohnson@shield.org",
    "password": "quake"
  },
  {
    "id": "3",
    "username": "zephyrone",
    "email": "sonofcoul@shield.org",
    "password": "toldja"
  }
]
const seedUsers = () => Users.bulkCreate(UserData);
module.exports = seedUsers;