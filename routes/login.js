const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.send('logeando');
})

module.exports = router;