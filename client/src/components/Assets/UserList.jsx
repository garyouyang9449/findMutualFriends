import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const UserList = ({ mutualFollowings }) => {
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
            {mutualFollowings.length > 0 && mutualFollowings.map((item) => (
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