const router = require('express').Router();
const { Post } = require('../../models/');
const { apiGuard } = require('../../utils/authGuard');

// Create a new post
router.post('/', apiGuard, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({ ...body, user_id: req.session.user_id });
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ message: 'Failed to create post. Please try again later.' });
  }
});

// Update an existing post
router.put('/:id', apiGuard, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: { id: req.params.id },
    });

    if (affectedRows > 0) {
      res.status(200).json({ message: 'Post updated successfully.' });
    } else {
      res.status(404).json({ message: 'Post not found.' });
    }
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ message: 'Failed to update post. Please try again later.' });
  }
});

// Delete a post
router.delete('/:id', apiGuard, async (req, res) => {
  try {
    const affectedRows = await Post.destroy({
      where: { id: req.params.id },
    });

    if (affectedRows > 0) {
      res.status(200).json({ message: 'Post deleted successfully.' });
    } else {
      res.status(404).json({ message: 'Post not found.' });
    }
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ message: 'Failed to delete post. Please try again later.' });
  }
});

module.exports = router;
