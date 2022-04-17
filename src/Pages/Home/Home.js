import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import './Home.css';

const Home = () => {
  return (
    <main className='home'>
      <Banner></Banner>
      <Features></Features>
    </main>
  );
};

export default Home;