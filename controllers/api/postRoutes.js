const router = require('express').Router();
const { Post } = require('../../models/');
const { apiGuard } = require('../../utils/authGuard');
const { Post, User, Comment } = require('../../models');

// Get all posts with associated users and comments
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,         // Include the user who created the post
          attributes: ['username'],
        },
        {
          model: Comment,      // Include the comments on the post
          include: {
            model: User,        // Include the user who made the comment
            attributes: ['username'],
          },
        },
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ message: 'Failed to retrieve posts. Please try again later.' });
  }
});
