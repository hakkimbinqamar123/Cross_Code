const express = require('express');
const router = express.Router();
const db = require('../database');

// Fetch Dashboard Overview
router.get('/dashboard', (req, res) => {
  const queries = {
    commentsCount: 'SELECT COUNT(*) AS count FROM comments',
    portfolioCount: 'SELECT COUNT(*) AS count FROM clients',
  };

  const results = {};

  db.query(queries.commentsCount, (err, commentResult) => {
    if (err) {
      console.error('Error fetching comments count:', err);
      return res.status(500).json({ message: 'Failed to fetch comments count' });
    }

    results.commentsCount = commentResult[0].count;

    db.query(queries.portfolioCount, (err, portfolioResult) => {
      if (err) {
        console.error('Error fetching portfolio count:', err);
        return res.status(500).json({ message: 'Failed to fetch portfolio count' });
      }

      results.portfolioCount = portfolioResult[0].count;
      res.json(results);
    });
  });
});

module.exports = router;
