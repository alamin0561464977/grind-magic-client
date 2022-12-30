import React from 'react';
import { BsCheckSquare } from "react-icons/bs";

const WhoWeAre = () => {
    return (
        <div>
            <div className=' flex items-center mb-8'>
                <img className=' w-1/2 h-[600px]' src="https://xpressrow.com/html/cafena/cafena/assets/images/bg/wwa-1.jpeg" alt="" />
                <div className='TryTheBastCoffeeInfo ml-[-100px] bg-white mr-12 rounded shadow-xl p-16 border '>
                    <samp className=' p-2 text-xl font-bold border-y-8 rounded-lg border-amber-700'>WHO WE ARE</samp>
                    <h1 className=' text-4xl font-bold py-4'>MORE THAN 27 YEARS OF EXPERIENCE</h1>
                    <p className=' font-bold'>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p>
                    <div>
                        <div className=' flex gap-5 mt-5 items-center'>
                            <BsCheckSquare className=' text-4xl hover:bg-amber-700 hover:text-white' />
                            <p className=' text-xl font-bold'>What is Lorem Ipsum Lorem Ipsum is simply.</p>
                        </div>
                        <div className=' flex gap-5 mt-5 items-center'>
                            <BsCheckSquare className=' text-4xl hover:bg-amber-700 hover:text-white' />
                            <p className=' text-xl font-bold'>Dummy text of the printing text.</p>
                        </div>
                        <div className=' flex gap-5 mt-5 items-center'>
                            <BsCheckSquare className=' text-4xl hover:bg-amber-700 hover:text-white' />
                            <p className=' text-xl font-bold'>Typesetting industry Lorem Ipsum has been the industry's</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;