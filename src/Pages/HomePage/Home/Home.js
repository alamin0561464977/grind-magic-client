import React from 'react';
import CoffeeMachine from '../CoffeeMachine/CoffeeMachine';
import CoffeeMenu from '../CoffeeMenu/CoffeeMenu';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import Footer from '../../Share/Footer/Footer';
import FromOurBlogs from '../FromOurBlogs/FromOurBlogs';
import OurHistoryHome from '../OurHistoryHome/OurHistoryHome';
import PopularProducts from '../PopularProducts/PopularProducts';
import Reservation from '../Reservation/Reservation';
import Top3CardHome from '../Top3CardHome/Top3CardHome';
import TopBanner from '../TopBanner/TopBanner';
import OrderCoffeeModal from '../../Share/OrderCoffeeModal/OrderCoffeeModal';
import { useState } from 'react';

const Home = () => {
    const [coffeeInfo, setCoffeeInfo] = useState(null);
    console.log('home', coffeeInfo);
    return (
        <div className=' bg-black text-white'>
            <TopBanner></TopBanner>
            <Top3CardHome></Top3CardHome>
            <OurHistoryHome></OurHistoryHome>
            <CoffeeMenu setCoffeeInfo={setCoffeeInfo}></CoffeeMenu>
            <CoffeeMachine></CoffeeMachine>
            <PopularProducts></PopularProducts>
            <CustomerFeedback></CustomerFeedback>
            <Reservation></Reservation>
            <FromOurBlogs></FromOurBlogs>
            <OrderCoffeeModal coffeeInfo={coffeeInfo}></OrderCoffeeModal>
            <Footer></Footer>
        </div>
    );
};

export default Home;