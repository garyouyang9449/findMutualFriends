import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="static" style={{ background: '#2E3B55' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          XFollowings
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;