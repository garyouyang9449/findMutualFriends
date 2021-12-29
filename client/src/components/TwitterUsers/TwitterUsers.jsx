import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

const TwitterUsers = ({ users, setUsers }) => {
  const [user, setUser] = useState('');
  const [showError, setShowError] = useState(false);
  const [label, setLabel] = useState('Twitter User Name');

  const handleChange = (event) => {
    setUser(event.target.value);
  }

  const handleClick = () => {
    if(user.length > 0 && user.charAt(0) === '@') {
      setShowError(true)
      setLabel('Error')
    } else {
      setUsers([...users, user]);
      setUser('');
    }
  };

  return (
    <Grid item xs={12}>
      <TextField
        id="standard-basic"
        label={label}
        variant="standard"
        value={user}
        onChange={handleChange}
        error={showError}
      />
      <Button
        variant="contained"
        onClick={handleClick}
      >
        Add User
      </Button>
    </Grid>
    
  )
}

export default TwitterUsers