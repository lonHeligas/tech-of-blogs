const { Users } = require('../models');

const UserData = [
  {
    "id": "1",
    "username": "lon",
    "email": "lon.heligas@gmail.com",
    "password": "guest123"
  },
  {
    "id": "2",
    "username": "daisyskye",
    "email": "djohnson@shield.org",
    "password": "quake123"
  },
  {
    "id": "3",
    "username": "zephyrone",
    "email": "sonofcoul@shield.org",
    "password": "toldja123"
  }
]
const seedUsers = () => {
  try {
    return Users.bulkCreate(UserData, {
    individualHooks:true
  })
    
  } catch (error) {
    console.log(error)
  }
};
module.exports = seedUsers;