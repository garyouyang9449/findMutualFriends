import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const TwitterUsers = () => {
  return (
    <>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant="contained" >Add User</Button>
    </>
    
  )
}

export default TwitterUsers