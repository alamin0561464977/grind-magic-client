import React from 'react';
import CoffeeMenu from '../CoffeeMenu/CoffeeMenu';
import OurHistoryHome from '../OurHistoryHome/OurHistoryHome';
import Top3CardHome from '../Top3CardHome/Top3CardHome';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div className=' bg-black text-white'>
            <TopBanner></TopBanner>
            <Top3CardHome></Top3CardHome>
            <OurHistoryHome></OurHistoryHome>
            <CoffeeMenu></CoffeeMenu>
        </div>
    );
};

export default Home;