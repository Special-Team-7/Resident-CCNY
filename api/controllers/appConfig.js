const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'Resident CCNY',
    description: 'Web application to help students find events that are happening in the Towers at CCNY',
  });
});


module.exports = router;