import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Nabvar from '../Pages/Shared/Navbar/Nabvar';

const RootLayout = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;