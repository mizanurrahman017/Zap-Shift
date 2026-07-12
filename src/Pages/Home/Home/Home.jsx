import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Work/Works';
import Service from '../Service/Service';
import Brands from '../Brands/Brands';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Works></Works>
          <Service></Service>
          <Brands></Brands>
        </div>
    );
};

export default Home;