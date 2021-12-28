import React from 'react';
import Button from '@mui/material/Button';
import Axios from "axios";

const MutualFollowings = ({ users, setMutualFollowings }) => {

  const onClick = () => {
    // fetch("/mutual-followings")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res.message)
    //     // setMutualFollowings()
    //   });
    Axios({
      method: "GET",
      url: "http://localhost:8080/mutual-followings",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res.data.message);
    });
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={onClick}
      >
        Get Mutual Followings
      </Button>
    </>
  )
}

export default MutualFollowings;