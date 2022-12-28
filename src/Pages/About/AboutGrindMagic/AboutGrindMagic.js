import React from 'react';
import { BsCheckSquare } from "react-icons/bs";

const AboutGrindMagic = () => {
    return (
        <div className=' grid grid-cols-2 gap-5 mt-12 p-5'>
            <div>
                <img src="https://www.glassdoor.com/employers/app/uploads/sites/2/2018/08/how-to-hire-waiters-and-waitstaff-823799902.jpg" alt="" />
            </div>
            <div className=' p-12'>
                <samp className=' p-2 text-xl font-bold border-y-8 rounded-lg border-amber-700'>About Grind Magic</samp>
                <h1 className=' text-3xl font-bold my-5'>ONE OF THE BEST COFFEE <br /> HOUSE IN YOUR HOME TOWN</h1>
                <p className=' text-lg'>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p>
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
    );
};

export default AboutGrindMagic;