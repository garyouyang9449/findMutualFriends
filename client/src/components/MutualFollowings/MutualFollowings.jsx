import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { getMutualFollowings } from '../../utils/Api';
import { Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const MutualFollowings = ({ users }) => {
  const [mutualFollowings, setMutualFollowings] = useState([]);

  useEffect(() => {
    console.log("data", mutualFollowings)
  }, [mutualFollowings])

  const onClick = () => {
    getMutualFollowings(users)
      .then(res => {
        var cur = []
        console.log(res.data)
        for (const user in res.data) {
          cur.push(res.data[user])
        }
        setMutualFollowings([...cur]);
        console.log(mutualFollowings)
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
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </ul>
        }
      </List>
    </>
  )
}

export default MutualFollowings;