import express from "express";
const app = express();
const port = 8080;

app.get('/', function (req, res) {
  res.send(' world')
});

app.listen(port);