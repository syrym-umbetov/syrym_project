import React from 'react';
import NewYork from '../assets/NewYork.png';

const Homepage = () => {
  return (
    <div>
      <img style={{ objectFit: 'cover', width: '100%' }} src={NewYork} />
    </div>
  );
};

export default Homepage;
