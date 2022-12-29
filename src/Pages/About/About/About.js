import React from 'react';
import AboutGrindMagic from '../AboutGrindMagic/AboutGrindMagic';
import AboutTopBanner from '../AboutTopBanner/AboutTopBanner';
import OurChef from '../OurChef/OurChef';
import TryTheBastCoffee from '../TryTheBestCoffee/TryTheBastCoffee';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const About = () => {
    return (
        <div className=' pb-8'>
            <AboutTopBanner></AboutTopBanner>
            <AboutGrindMagic></AboutGrindMagic>
            <WhyChooseUs></WhyChooseUs>
            <TryTheBastCoffee></TryTheBastCoffee>
            <OurChef></OurChef>
        </div>
    );
};

export default About;