const router = require('express').Router();
const { Comment } = require('../../models/');
const { apiGuard } = require('../../utils/authGuard');

// Create a new comment
router.post('/', apiGuard, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id, // Associate the comment with the logged-in user
      post_id: req.body.post_id,    // Ensure the comment is linked to the correct post
    });
    res.status(201).json(newComment);
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ message: 'Failed to create comment. Please try again later.' });
  }
});

// Update an existing comment
router.put('/:id', apiGuard, async (req, res) => {
  try {
    const [affectedRows] = await Comment.update(req.body, {
      where: { id: req.params.id },
    });

    if (affectedRows > 0) {
      res.status(200).json({ message: 'Comment updated successfully.' });
    } else {
      res.status(404).json({ message: 'Comment not found.' });
    }
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ message: 'Failed to update comment. Please try again later.' });
  }
});

// Delete a comment
router.delete('/:id', apiGuard, async (req, res) => {
  try {
    const affectedRows = await Comment.destroy({
      where: { id: req.params.id },
    });

    if (affectedRows > 0) {
      res.status(200).json({ message: 'Comment deleted successfully.' });
    } else {
      res.status(404).json({ message: 'Comment not found.' });
    }
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ message: 'Failed to delete comment. Please try again later.' });
  }
});

module.exports = router;
