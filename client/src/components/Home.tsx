import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AlertMassage from './Assets/AlertMessage';
import Header from './Header/Header';
import MutualFollowings from './MutualFollowings/MutualFollowings';
import TwitterUsers from './TwitterUsers/TwitterUsers';


const Home = () => {
  // const [users, setUsers] = useState(['punk6529']);
  // const [userIds, setUserIds] = useState(['1388487332093997057']);
  const [users, setUsers] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [mutualFollowings, setMutualFollowings] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    
  }, [mutualFollowings]);

  useEffect(() => {
    console.log(users);
    console.log(userIds);
  }, [users, userIds]);

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
        <MutualFollowings
          users={users}
          setMutualFollowings={setMutualFollowings}
        />
      </Grid>
      
    </>
  )
}

export default Home;