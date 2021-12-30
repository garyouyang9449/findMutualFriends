import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { getMutualFollowings } from '../../utils/Api';
import { Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const MutualFollowings = ({ users, setOpenAlert, setMessage }) => {
  const [mutualFollowings, setMutualFollowings] = useState([]);

  const onClick = () => {
    if(users && users.length > 0) {
      getMutualFollowings(users)
      .then(res => {
        var cur = []

        for (const user in res.data) {
          cur.push(res.data[user])
        }
        setMutualFollowings([...cur]);
        setOpenAlert(false)
        setMessage('')
      });
    } else {
      setOpenAlert(true);
      setMessage('Please enter at least one Twitter user')
    }
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={onClick}
      >
        Get Mutual Followings
      </Button>
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
    </>
  )
}

export default MutualFollowings;