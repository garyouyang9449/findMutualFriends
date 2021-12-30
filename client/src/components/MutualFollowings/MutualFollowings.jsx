import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { getMutualFollowings } from '../../utils/Api';
import UserList from '../Assets/UserList';

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
      <UserList users={mutualFollowings} />
    </>
  )
}

export default MutualFollowings;