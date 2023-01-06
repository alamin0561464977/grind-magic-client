import React from 'react';
import { Outlet } from 'react-router-dom';
import CardR from '../Pages/CardR/CardR';
import Footer from '../Pages/Share/Footer/Footer';
import Navbar from '../Pages/Share/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;