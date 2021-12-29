import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import MutualFollowings from './MutualFollowings/MutualFollowings';
import TwitterUsers from './TwitterUsers/TwitterUsers';


const Home = () => {
  const [users, setUsers] = useState(['punk6529', 'Garyoy9449']);
  // const [users, setUsers] = useState(['punk6529']);
  const [mutualFollowings, setMutualFollowings] = useState([]);

  useEffect(() => {
    
  }, [mutualFollowings]);

  return (
    <>
      <Header />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        direction="column"
        alignItems="center"
      >
        <TwitterUsers />
        <MutualFollowings
          users={users}
          setMutualFollowings={setMutualFollowings}
        />
      </Grid>
    </>
  )
}

export default Home;