import express from "express";
import Axios from "axios";
import { HEADERS } from './auth/auth';

const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());

app.get('/mutual-followings', function (req, res) {
  const users = (<string>req.query.users).split(','); 
  const promises = users.map(user => {
    return Axios(
      {
        method: "GET",
        url: `https://api.twitter.com/2/users/by/username/${user}`,
        headers: HEADERS
      }
    )
    .then(res => res.data)
  });
  Promise.all(promises).then(res => {
    console.log(res)
  })

  res.json({
    message: 'in server!'
  })
});

app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`)
});