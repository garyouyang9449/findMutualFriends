import express from "express";
const app = express();
const PORT = 8080;

app.get('/mutual-followings', function (req, res) {
  res.json({
    message: 'in server!'
  })
});

app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`)
});