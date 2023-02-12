const { Comments } = require('../models');

const CommentData = [
  {
    "id": 1,
    "blog_id": 1,    
    "commentauthor_id": 2,
    "comment_body": "I like pie."
  },
  {
    "id": 2,
    "blog_id": 2,    
    "commentauthor_id": 1,
    "comment_body": "I don't like pie."
  },
  {
    "id": 3,
    "blog_id": 3,    
    "commentauthor_id": 3,
    "comment_body": "I like cake."
  }
]

const seedComments = () => Comments.bulkCreate(CommentData);

module.exports = seedComments;