import React from 'react';
import Button from '@mui/material/Button';
import { getMutualFollowings } from '../../utils/Api';

const MutualFollowings = ({ users, setMutualFollowings }) => {

  const onClick = () => {
    getMutualFollowings(users)
      .then(res => {
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