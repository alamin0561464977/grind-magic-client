import React from 'react';
import { BsFillForwardFill } from "react-icons/bs";

const NewsBlogs = () => {
    return (
        <div className=' container mx-auto mb-12'>
            <div className='container mx-auto my-16'>
                <samp className=' p-2 text-xl font-bold border-y-8 rounded-lg border-amber-700'>NEWS & BLOG</samp>
                <div className=' flex justify-between my-6'>
                    <h1 className='text-5xl font-bold'>LATEST NEWS & BLOG</h1>
                    <button className='btn '>LEARN MORE</button>
                </div>
            </div>
            <div className='grid grid-col-1 lg:grid-cols-3 gap-6'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className='h-80' src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2-1.jpeg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2>
                            BY: RASALINA
                        </h2>
                        <p className=' text-xl font-bold'>Build A Cool Mornig With Cafena Coffee</p>
                        <div className="card-actions justify-end">
                            <button className=' flex items-center gap-2 font-bold text-xl'>READ MORE <BsFillForwardFill /> </button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className='h-80' src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2-2.jpeg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2>
                            BY: RASALINA
                        </h2>
                        <p className=' text-xl font-bold'>Ideal Cocktails From Our Barmen For Pefect Mood</p>
                        <div className="card-actions justify-end">
                            <button className=' flex items-center gap-2 font-bold text-xl'>READ MORE <BsFillForwardFill /> </button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className='h-80' src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2-3.jpeg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2>
                            BY: RASALINA
                        </h2>
                        <p className=' text-xl font-bold'>Questions Business Must Be Able To Answers</p>
                        <div className="card-actions justify-end">
                            <button className=' flex items-center gap-2 font-bold text-xl'>READ MORE <BsFillForwardFill /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsBlogs;