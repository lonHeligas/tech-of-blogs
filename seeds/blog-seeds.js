const { Category } = require('../models');

const CategoryData =[
  {
  "id": 1,
  "title": "Being Inhuman",
  "author": "daisyskye",
  "author_id": 2,
  "body": "I like being inhuman. My powers are fun. Also, I can't wait to go to outer space with Jemma and get high again.",
  "dateCreated": "020223"
  },
  {
  "id": 2,
  "title": "Being Inhuman",
  "author": "daisyskye",
  "author_id": 2,
  "body": "I like being inhuman. My powers are fun. Also, I can't wait to go to outer space with Jemma and get high again.",
  "dateCreated": "020223"
  },
  {
  "id": 3,
  "title": "Not Inhuman",
  "author": "daisyskye",
  "author_id": 1,
  "body": "I like being inhuman. My powers are fun. Also, I can't wait to go to outer space with Jemma and get high again.",
  "datCreated": "020223"
  }
];

const seedBlogs = () => Category.bulkCreate(CategoryData);

module.exports = seedBlogs;