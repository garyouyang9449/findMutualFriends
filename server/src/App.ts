import express from "express";
import { twitterUersToIds, getFollowingsById } from './Api/Api';

const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());

app.get('/mutual-followings', function (req, res) {
  const idPromises: Promise<string>[] = twitterUersToIds(<string>req.query.users);
  var idToUser: any = {};
  var idToOccur: any = {};
  var sortable: any[] = [];

  Promise.all(idPromises).then(res => {
    const usersToIds: string[] = [...res];
    const followingPromises = getFollowingsById(usersToIds);

    Promise.all(followingPromises).then(res => {
      // res is array
      res.forEach(e => {
        // e.data is array
        e.data.forEach((user: any) => {
          idToUser[user.id] = user;
          idToOccur[user.id] = idToOccur[user.id] + 1 || 0;
        });
      });

      for (var id in idToOccur) {
        sortable.push([id, idToOccur[id]]);
      }
      
      sortable.sort(function(a, b) {
          return b[1] - a[1];
      });

      
    });
  });

  res.json({
    message: 'in server!'
  })
});

app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`)
});