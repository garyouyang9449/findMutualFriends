import express from "express";
import { twitterUersToIds, getFollowingsById } from './Api/Api';

const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());

app.get('/mutual-followings', function (req, response) {
  const idPromises: Promise<string>[] = twitterUersToIds(<string>req.query.users);
  var idToUser: any = {};
  var idToOccur: any = {};
  var sortable: any[] = [];
  var result: any = {};

  Promise.all(idPromises).then(res => {
    const usersToIds: string[] = [...res];
    const followingPromises = getFollowingsById(usersToIds);

    Promise.all(followingPromises).then(r => {
      r.forEach(e => {
        e.data.forEach((user: any) => {
          idToUser[user.id] = user.name;
          idToOccur[user.id] = idToOccur[user.id] + 1 || 0;
        });
      });

      for (var id in idToOccur) {
        sortable.push([id, idToOccur[id]]);
      }
      
      sortable.sort(function(a, b) {
          return b[1] - a[1];
      });

      const TOP_PERCENT = 0.5; // TODO: move this to const file
      sortable = sortable.slice(0, sortable.length * TOP_PERCENT);

      sortable.forEach(id => {
        result[id[0]] = idToUser[id[0]];
      });
      response.json(result);
    });
  });
});

app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`)
});