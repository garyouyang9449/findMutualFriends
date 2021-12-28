import express from "express";
const auth = require('./auth/auth');
const header = auth.header;

const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());

app.get('/mutual-followings', function (req, res) {
  res.json({
    message: 'in server!'
  })
});

app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`)
});