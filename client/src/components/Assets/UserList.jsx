import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const UserList = ({ users }) => {
  return (
    <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 },
        }}
      >
        {
          <ul>
            {users.length > 0 && users.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={`https://twitter.com/${item}`} />
              </ListItem>
            ))}
          </ul>
        }
    </List>
  );
}

export default UserList;