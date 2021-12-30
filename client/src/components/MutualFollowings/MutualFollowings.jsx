import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { getMutualFollowings } from '../../utils/Api';
import { Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const MutualFollowings = ({ users }) => {
  const [mutualFollowings, setMutualFollowings] = useState([]);

  const onClick = () => {
    getMutualFollowings(users)
      .then(res => {
        var cur = []

        for (const user in res.data) {
          cur.push(res.data[user])
        }
        setMutualFollowings([...cur]);
      });
  }

  return (
    <>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={onClick}
        >
          Get Mutual Followings
        </Button>
      </Grid>
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