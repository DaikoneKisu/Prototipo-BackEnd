const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use(require('./Routes/index.js'));

app.get('/', (req, res) => {
  res.send('wenas');
})

app.listen(PORT, () => {
  console.log(`The server is listening in port ${PORT}...`);
})