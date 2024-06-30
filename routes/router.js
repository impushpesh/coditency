const express = require('express');
const router = express.Router();

// Example route rendering an EJS template
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
