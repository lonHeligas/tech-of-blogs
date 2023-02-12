const { Blogposts } = require('../models');
console.log(`Hello there from blog-seeds!`)
const categoryData =[
  {
  "id": 1,
  "title": "Being Inhuman",
  
  "author_id": 2,
  "body": "I like being inhuman. My powers are fun. Also, I can't wait to go to outer space with Jemma and get high again.",
  "dateCreated": "020224"
  },
  {
  "id": 2,
  "title": "Being Inhuman",
  
  "author_id": 3,
  "body": "I like being inhuman. My powers are fun. Also, I can't wait to go to outer space with Jemma and get high again.",
  "dateCreated": "020223"
  },
  {
  "id": 3,
  "title": "Not Inhuman",
  
  "author_id": 1,
  "body": "Also, I can't wait to go to outer space with Jemma and get high again.",
  "datCreated": "020223"
  }
];

const seedBlogs = () => Blogposts.bulkCreate(categoryData);

module.exports = seedBlogs;