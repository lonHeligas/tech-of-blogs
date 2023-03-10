const Users = require('./Users');
const Comments = require('./Comments');
const Blogposts = require('./Blogposts');

Users.hasMany(Comments, {
  foreignKey: "commentauthor_id",
  target: 'id'
});

Users.hasMany(Blogposts, {
  foreignKey: 'author_id',
  target: 'id'
})

Blogposts.hasMany(Comments, {
  foreignKey: 'blog_id',
  target: 'id'
})

Blogposts.belongsTo(Users, {
  foreignKey: 'author_id',
  target: 'id'
})

Comments.belongsTo(Blogposts, {
  foreignKey: 'blog_id',
  target: 'id',
})

Comments.belongsTo(Users, {
  foreignKey: 'commentauthor_id',
  target: 'id',
})

module.exports = { 
  Users, 
  Comments, 
  Blogposts
};