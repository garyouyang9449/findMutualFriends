import React from 'react';
import Button from '@mui/material/Button';
import { getMutualFollowings } from '../../utils/Api';
import { Grid } from '@mui/material';

const MutualFollowings = ({ users, setMutualFollowings }) => {

  const onClick = () => {
    getMutualFollowings(users)
      .then(res => {
        console.log(res.data.message);
      });
  }

  return (
    <Grid item xs={12}>
      <Button
        variant="contained"
        onClick={onClick}
      >
        Get Mutual Followings
      </Button>
    </Grid>
  )
}

export default MutualFollowings;