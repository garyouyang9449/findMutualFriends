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
      <Grid container>
        <Grid item xs={6}>
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
          >
            <Grid item>
              <TwitterUsers
                users={users}
                setUsers={setUsers}
                userIds={userIds}
                setUserIds={setUserIds}
                openAlert={openAlert}
                setOpenAlert={setOpenAlert}
                setMessage={setMessage}
              />
            </Grid>
            <Grid item>
              {openAlert && (
                <AlertMassage
                  setOpenAlert={setOpenAlert}
                  message={message}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <MutualFollowings
            users={users}
            setOpenAlert={setOpenAlert}
            setMessage={setMessage}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Home;