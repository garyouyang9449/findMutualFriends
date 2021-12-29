import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

const TwitterUsers = () => {
  return (
    <Grid item xs={12}>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant="contained" >Add User</Button>
    </Grid>
    
  )
}

export default TwitterUsers