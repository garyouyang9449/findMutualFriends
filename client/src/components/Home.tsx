import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import MutualFollowings from './MutualFollowings/MutualFollowings';
import TwitterUsers from './TwitterUsers/TwitterUsers';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [mutualFollowings, setMutualFollowings] = useState([]);

  useEffect(() => {
    
  }, [mutualFollowings]);

  return (
    <>
      {/* <div>
        <Header />
      </div> */}
      <div>
        <TwitterUsers />
      </div>
      <div>
        <MutualFollowings
          users={users}
          setMutualFollowings={setMutualFollowings}
        />
      </div>
    </>
  )
}

export default Home;