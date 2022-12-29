import React from 'react';
import AboutGrindMagic from '../AboutGrindMagic/AboutGrindMagic';
import AboutTopBanner from '../AboutTopBanner/AboutTopBanner';
import TryTheBastCoffee from '../TryTheBestCoffee/TryTheBastCoffee';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const About = () => {
    return (
        <div className=' pb-8'>
            <AboutTopBanner></AboutTopBanner>
            <AboutGrindMagic></AboutGrindMagic>
            <WhyChooseUs></WhyChooseUs>
            <TryTheBastCoffee></TryTheBastCoffee>
        </div>
    );
};

export default About;