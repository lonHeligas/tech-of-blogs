const { Category } = require('../models');

const CategoryData = [
  {
    "id": 1,
    "blog_id": 1,    
    "commentauthor_id": 2,
    "comment_body": "I like pie."
  }
]

const seedComments = () => Category.bulkCreate(CategoryData);

module.exports = seedComments;