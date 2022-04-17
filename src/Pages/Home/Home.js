import React from 'react';
import Cources from '../Cources/Cources';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import './Home.css';
import Ratings from './Ratings/Ratings';

const Home = () => {
  return (
    <main className='home'>
      <Banner></Banner>
      <Features></Features>
      <Cources></Cources>
      <Ratings></Ratings>
    </main>
  );
};

export default Home;