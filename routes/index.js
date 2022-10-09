const express = require('express');
const app = express();

app.use('/auth', require('./login'))
app.use('/auth', require('./register'))
app.use('/stickers', require('./stickers'))

module.exports = app;