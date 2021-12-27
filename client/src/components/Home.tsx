import React, { useState } from 'react';
import Header from './Header/Header';
import TwitterUsers from './TwitterUsers/TwitterUsers';

const Home = () => {
  const [users, setUsers] = useState([])

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <TwitterUsers />
      </div>
    </>
  )
}

export default Home;