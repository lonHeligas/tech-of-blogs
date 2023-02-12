const Users = require('./Users');
const Comments = require('./Comments');
const Blogposts = require('./Blogposts');

Users.hasMany(Comments, {
  foreignKey: "user_id"
});

Users.hasMany(Blogposts, {
  foreignKey: 'user_id',
})

Blogposts.belongsTo(Users, {
  foreignKey: 'user_id',
})

Comments.belongsTo(Blogposts, {
  foreignKey: 'blog_id',
})

module.exports = { 
  Users, 
  Comments, 
  Blogposts
};