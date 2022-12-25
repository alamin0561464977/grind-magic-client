import React from 'react';
import HomeNavbar from './HomeNavbar';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";


const TopBanner = () => {
    return (
        <div className='top-banner'>
            <HomeNavbar></HomeNavbar>
            <div className=' text-white ml-8'>
                <h1 className=' text-7xl mt-28 font-bold'>
                    Welcome to
                    <br />
                    Grind Magic
                </h1>
                <p className=' text-lg font-bold mt-24'>The coffee is brewed by first roasting the green coffee beans over hot <br />
                    coals in a brazier. given an opportunity to sample.
                </p>
                <div className=' mt-8'>
                    <button className="btn  bg-amber-900">Testy Coffee</button>
                    <button className="btn btn-outline btn-accent ml-5">Read More</button>
                </div>
                <div className=' mt-8 flex gap-6'>
                    <samp className=' flex gap-2 items-center text-lg font-bold hover:cursor-pointer'>
                        <FaFacebook />
                        FACEBOOK
                    </samp>
                    <samp className=' flex gap-2 items-center text-lg font-bold hover:cursor-pointer'>
                        <FaTwitter />
                        TWITTER
                    </samp>
                    <samp className=' flex gap-2 items-center text-lg font-bold hover:cursor-pointer'>
                        <FaYoutube />
                        YOUTUBE
                    </samp>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;