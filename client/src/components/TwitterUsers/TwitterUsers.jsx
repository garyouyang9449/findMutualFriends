import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { userToId } from '../../utils/Api';
import UserList from '../Assets/UserList';

const TwitterUsers = ({
  users,
  setUsers,
  userIds,
  setUserIds,
  openAlert,
  setOpenAlert,
  setMessage
}) => {
  const [user, setUser] = useState('');
  
  const handleChange = (event) => {
    setUser(event.target.value);
  }

  const handleClick = () => {
    if(user.length > 0 && user.charAt(0) === '@') {
      setOpenAlert(true)
      setMessage('Twitter User cannot Start with @')
    } else if(users.includes(user)) {
      setOpenAlert(true)
      setMessage('Twitter User is alredy in the list')
    } else {
      userToId(user)
      .then(res => {
        if(res.data.error) {
          setOpenAlert(true)
          setMessage(res.data.error)
        } else {
          setOpenAlert(false)
          setMessage('')
          setUserIds([...userIds, res.data.data.id])
          setUsers([...users, user]); //TODO: change user to its id
          setUser('');
        }
      })
    }
  };

  return (
    <>
      <Grid container>
        <Grid item>
          <TextField
            id='standard-basic'
            label='Enter a Twitter User Name'
            variant='standard'
            value={user}
            onChange={handleChange}
            error={openAlert}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={handleClick}
          >
            Add User
          </Button>
        </Grid>
      </Grid >
      <UserList users={users} />
    </>
  )
}

export default TwitterUsers