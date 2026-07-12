import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Work/Works';
import Service from '../Service/Service';
import Brands from '../Brands/Brands';
import Tracking from '../Tracking/Tracking';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Works></Works>
          <Service></Service>
          <Brands></Brands>
          <Tracking></Tracking>
        </div>
    );
};

export default Home;