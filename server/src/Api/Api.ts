import { HEADERS } from '../auth/auth';
import Axios from "axios";

export const twitterUersToIds = (users: string) => {
  const twitterUsers: string[] = users.split(',');
  const promises = twitterUsers.map(user => {
    return Axios(
      {
        method: "GET",
        url: `https://api.twitter.com/2/users/by/username/${user}`,
        headers: HEADERS
      }
    )
    .then(res => res.data);
  });
  return promises
}

export const getFollowingsById = (users: any[]) => {
  const promises = users.map(user => {
    return Axios(
      {
        method: "GET",
        url: `https://api.twitter.com/2/users/${user.data.id}/following`,
        headers: HEADERS,
        params: {'max_results': '1000'}
      }
    )
    .then(res => res.data);
  });
  return promises;
}