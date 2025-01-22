const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const app = express();


// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get Top 3 Comments
router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ created_at: -1 }).limit(3);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch comments', error: err.message });
  }
});

// Add a New Comment
router.post('/comments', async (req, res) => {
  const { name, comment, email } = req.body;

  if (!name || !comment || !email) {
    return res.status(400).json({ message: 'Name, Email and Comment are required' });
  }

  try {
    const newComment = new Comment({ name, comment, email });
    const savedComment = await newComment.save();
    res.json({ message: 'Comment added successfully', id: savedComment._id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add comment', error: err.message });
  }
});

// Delete a Comment by ID
router.delete('/comments/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedComment = await Comment.findByIdAndDelete(id);

    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.json({ message: 'Comment deleted successfully', id: deletedComment._id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete comment', error: err.message });
  }
});

module.exports = router;
