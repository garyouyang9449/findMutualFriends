import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AlertMassage from './Assets/AlertMessage';
import Header from './Header/Header';
import MutualFollowings from './MutualFollowings/MutualFollowings';
import TwitterUsers from './TwitterUsers/TwitterUsers';


const Home = () => {
  const [users, setUsers] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState('');

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
        <TwitterUsers
          users={users}
          setUsers={setUsers}
          userIds={userIds}
          setUserIds={setUserIds}
          openAlert={openAlert}
          setOpenAlert={setOpenAlert}
          setMessage={setMessage}
        />
        {openAlert && (
          <AlertMassage
            setOpenAlert={setOpenAlert}
            message={message}
          />
        )}
        <MutualFollowings users={users} />
      </Grid>
    </>
  )
}

export default Home;