import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Work/Works';
import Service from '../Service/Service';
import Brands from '../Brands/Brands';
import Tracking from '../Tracking/Tracking';
import Merchant from '../Merchant/Merchant';
import Customers from '../Customers/Customers';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Works></Works>
          <Service></Service>
          <Brands></Brands>
          <Tracking></Tracking>
          <Merchant></Merchant>
          <Customers></Customers>
        </div>
    );
};

export default Home;