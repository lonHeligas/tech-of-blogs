const Users = require('./Users');
const Comments = require('./Comments');
const Blogposts = require('./Blogposts');

Users.hasMany(Comments, {
  foreignKey: "blogposts_id",
  target: 'id'
});

Users.hasMany(Blogposts, {
  foreignKey: 'author_id',
  target: 'id'
})

Blogposts.belongsTo(Users, {
  foreignKey: 'blogkposts_id',
  target: 'id'
})

Comments.belongsTo(Blogposts, {
  foreignKey: 'blogposts_id',
  target: 'id',
})

module.exports = { 
  Users, 
  Comments, 
  Blogposts
};