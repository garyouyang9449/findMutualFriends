import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import TwitterUsers from './TwitterUsers/TwitterUsers';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/mutual-followings")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);

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