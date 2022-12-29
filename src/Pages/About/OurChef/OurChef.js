import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaPinterest } from "react-icons/fa";

const OurChef = () => {
    return (
        <div className=' container mx-auto my-24'>
            <div className=' text-center'>
                <samp className=' p-2 text-xl font-bold border-y-8 rounded-lg border-amber-700'>OUR CHEF</samp>
                <h1 className=' text-4xl font-bold mt-5'>MEET OUR PROFESSIONAL</h1>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                <div className=' border rounded-lg'>
                    <div className='OurChefBG1 h-80 text-right text-white flex justify-end m-8 rounded-r-[50px] rounded-t-[50px] hover:rounded-tl-none hover:rounded-bl-[50px]'>
                        <div className=' text-4xl font-bold text-right my-auto bg-amber-500 p-2 rounded-l-lg'>
                            <FaFacebookSquare className=' my-3 hover:text-gray-100 hover:cursor-pointer' />
                            <FaTwitterSquare className=' my-3 hover:text-slate-100 hover:cursor-pointer' />
                            <FaLinkedin className=' my-3 hover:text-slate-100 hover:cursor-pointer' />
                            <FaPinterest className=' my-3 hover:text-slate-100 hover:cursor-pointer' />
                        </div>
                    </div>
                    <div className=' m-8'>
                        <h1 className=' text-2xl font-bold'>RASALINA DE WILLAMSON</h1>
                        <h3 className='font-bold text-zinc-500'>12 YEAR EXPERIENCE</h3>
                    </div>
                </div>
                <div className=' border rounded-lg'>
                    <div className='OurChefBG2 h-80 text-right text-white flex justify-end m-8 rounded-r-[50px] rounded-t-[50px] hover:rounded-tl-none hover:rounded-bl-[50px]'>
                        <div className=' text-4xl font-bold text-right my-auto bg-amber-500 p-2 rounded-l-lg'>
                            <FaFacebookSquare className=' my-3 hover:text-gray-100 hover:cursor-pointer' />
                            <FaTwitterSquare className=' my-3 hover:text-slate-100 hover:cursor-pointer' />
                            <FaLinkedin className=' my-3 hover:text-slate-100 hover:cursor-pointer' />
                            <FaPinterest className=' my-3 hover:text-slate-100 hover:cursor-pointer' />
                        </div>
                    </div>
                    <div className=' m-8'>
                        <h1 className=' text-2xl font-bold'>ALEXTINA JIMIEY</h1>
                        <h3 className='font-bold text-zinc-500'>09 YEAR EXPERIENCE</h3>
                    </div>
                </div>
                <div className=' border rounded-lg'>
                    <div className='OurChefBG3 h-80 text-right text-white flex justify-end m-8 rounded-r-[50px] rounded-t-[50px] hover:rounded-tl-none hover:rounded-bl-[50px]'>
                        <div className=' text-4xl font-bold text-right my-auto bg-amber-500 p-2 rounded-l-lg'>
                            <FaFacebookSquare className=' my-3 hover:text-gray-100 hover:cursor-pointer' />
                            <FaTwitterSquare className=' my-3 hover:text-slate-100 hover:cursor-pointer' />
                            <FaLinkedin className=' my-3 hover:text-slate-100 hover:cursor-pointer' />
                            <FaPinterest className=' my-3 hover:text-slate-100 hover:cursor-pointer' />
                        </div>
                    </div>
                    <div className=' m-8'>
                        <h1 className=' text-2xl font-bold'>JIMMEY AENDERSON</h1>
                        <h3 className='font-bold text-zinc-500'>05 YEAR EXPERIENCE</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurChef;