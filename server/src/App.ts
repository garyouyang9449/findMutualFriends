import express from "express";
import { twitterUersToIds, getFollowingsById } from './Api/Api';

const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());

app.get('/mutual-followings', function (req, res) {
  const idPromises: Promise<string>[] = twitterUersToIds(<string>req.query.users);
  
  Promise.all(idPromises).then(res => {
    const usersToIds: string[] = [...res];
    const followingPromises = getFollowingsById(usersToIds);

    Promise.all(followingPromises).then(res => {
      res.forEach(r => console.log(r.data))
    });
  });

  res.json({
    message: 'in server!'
  })
});

app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`)
});