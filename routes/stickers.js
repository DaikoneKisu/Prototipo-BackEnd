const express = require('express');
const { v4 } = require('uuid');
const router = express.Router();

const stickers = [];

router.get('/', (req, res) => {
  res.json(stickers);
})

router.post('/', (req, res) => {
  const newSticker = {
    player: req.body.player,
    id: v4()
  }
  stickers.push(newSticker);
  res.json(stickers);
})

module.exports = router;