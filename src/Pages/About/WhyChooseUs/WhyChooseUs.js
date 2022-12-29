import React from 'react';
import { BsArrowRightSquare } from "react-icons/bs";


const WhyChooseUs = () => {
    return (
        <div className=' my-14'>
            <div className=' text-center'>
                <samp className=' p-2 text-xl font-bold border-y-8 rounded-lg border-amber-700'>WHY CHOOSE US</samp>
                <h1 className=' text-5xl font-bold pt-8'>WE ARE PROVIDE BEST SERVICE <br /> IN YOUR CITY</h1>
            </div>
            <div className=' grid grid-cols-3 gap-5 container mx-auto mt-8'>
                <div className=' border border-slate-500 text-center p-8 rounded'>
                    <img className=' mx-auto' src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png" alt="" />
                    <h1 className=' text-3xl font-bold my-3'>testy coffee recipe</h1>
                    <p>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</p>
                    <BsArrowRightSquare className=' text-4xl font-bold mx-auto mt-3 hover:bg-amber-700 hover:text-white' />
                </div>
                <div className=' border border-slate-500 text-center p-8 rounded'>
                    <img className=' mx-auto' src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-2.png" alt="" />
                    <h1 className=' text-3xl font-bold my-3'>Great Location</h1>
                    <p>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</p>
                    <BsArrowRightSquare className=' text-4xl font-bold mx-auto mt-3 hover:bg-amber-700 hover:text-white' />
                </div>
                <div className=' border border-slate-500 text-center p-8 rounded'>
                    <img className=' mx-auto' src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png" alt="" />
                    <h1 className=' text-3xl font-bold my-3'>Professional Chef</h1>
                    <p>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</p>
                    <BsArrowRightSquare className=' text-4xl font-bold mx-auto mt-3 hover:bg-amber-700 hover:text-white' />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;