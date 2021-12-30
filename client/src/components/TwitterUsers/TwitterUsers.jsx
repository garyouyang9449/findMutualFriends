import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { userToId } from '../../utils/Api';

const TwitterUsers = ({
  users,
  setUsers,
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
    }
    else {
      userToId(user)
      .then(res => {
        console.log(res)
        if(res.data.error) {
          setOpenAlert(true)
          setMessage(res.data.error)
        } else {
          setOpenAlert(false)
          setMessage('')
          setUsers([...users, user]); //TODO: change user to its id
          setUser('');
        }
      })
    }
  };

  return (
    <Grid item xs={12}>
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
        <Grid item alignItems="stretch" style={{ display: "flex" }}>
          <Button
            variant="contained"
            onClick={handleClick}
          >
            Add User
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TwitterUsers