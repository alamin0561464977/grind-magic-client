import React from 'react';
import {
    BsFillTelephoneForwardFill,
    BsFillEnvelopeOpenFill,
    BsGeoAltFill
} from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer text-white'>
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <div className=' flex gap-5'>
                            <img className=' h-24 w-24' src="https://static.vecteezy.com/system/resources/previews/010/160/674/original/coffee-icon-sign-symbol-design-free-png.png" alt="" />
                            <div>
                                <h1 className=' text-4xl font-bold mb-3'>Welcome to Grind Magic</h1>
                                <p className=' text-lg'>The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. given an opportunity to sample.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=' flex gap-4 my-2 items-center text-xl'>
                            <BsFillTelephoneForwardFill />
                            <h1>(+966) 5614 64977</h1>
                        </div>
                        <div className=' flex gap-4 my-2 items-center text-xl'>
                            <BsFillEnvelopeOpenFill />
                            <h1>alamin977@gmail.com</h1>
                        </div>
                        <div className=' flex gap-4 my-2 items-center text-xl'>
                            <BsGeoAltFill />
                            <h1>Saudi Arabia, Abha </h1>
                        </div>
                    </div>
                    <div className=' flex gap-4 text-4xl justify-end pt-16'>
                        <a href="https://www.facebook.com/profile.php?id=100082330179416">
                            <FaFacebookSquare className=' hover:cursor-pointer hover:text-amber-700' />
                        </a>
                        <a href="https://twitter.com/home">
                            <FaTwitterSquare className=' hover:cursor-pointer hover:text-amber-700' />
                        </a>
                        <a href="https://www.youtube.com/@ProgrammingHeroCommunity">
                            <FaYoutubeSquare className=' hover:cursor-pointer hover:text-amber-700' />
                        </a>
                        <a href="https://www.instagram.com/accounts/login/">
                            <FaInstagram className=' hover:cursor-pointer hover:text-amber-700' />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                    <div className=' flex gap-5 text-lg font-bold'>
                        <Link to='/'><h1 className=' hover:cursor-pointer hover:text-amber-700'>HOME</h1></Link>
                        <Link to='/about'><h1 className=' hover:cursor-pointer hover:text-amber-700'>ABOUT</h1></Link>
                        <Link to='/grind-magic-menu'><h1 className=' hover:cursor-pointer hover:text-amber-700'>MENU</h1></Link>
                        <Link to='/reservation'><h1 className=' hover:cursor-pointer hover:text-amber-700'>RESERVATION</h1></Link>
                        <Link to='/'><h1 className=' hover:cursor-pointer hover:text-amber-700'>PAGES</h1></Link>
                        <Link to='/'><h1 className=' hover:cursor-pointer hover:text-amber-700'>SHOP</h1></Link>
                        <Link to='/'><h1 className=' hover:cursor-pointer hover:text-amber-700'>BLOGS</h1></Link>
                    </div>
                    <p className="text-sm">
                        © Copyright 2020 Lorem Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;