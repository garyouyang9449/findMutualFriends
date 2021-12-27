import React from 'react';
import Button from '@mui/material/Button';

const MutualFollowings = ({ users, setMutualFollowings }) => {

  const onClick = () => {
    fetch("/mutual-followings")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message)
        // setMutualFollowings()
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