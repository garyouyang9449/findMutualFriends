import Axios from "axios";

export const getMutualFollowings = (users) => {
  console.log(users)
  return Axios(
    {
      method: "GET",
      url: "http://localhost:8080/mutual-followings",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}