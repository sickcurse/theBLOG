const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


// A Post can have many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User,{
  foreignKey:"user_id"
})
// A Comment belongs to a single Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// A Comment belongs to a User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// A User can have many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

module.exports = { User, Post, Comment };
