import React from 'react';
import { BsForward } from "react-icons/bs";

const FromOurBlogs = () => {
    return (
        <div className=' p-8 mt-14'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
                <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                    <div className=' text-center'>
                        <span className=' text-lg text-center border-y-8 mx-auto rounded-lg border-amber-700 font-bold p-2'>FROM OUR BLOG</span><br />
                        <h1 className=' mt-5 text-4xl font-bold'>OUR NEWS & ARTICLES</h1>
                    </div>
                </div>
                <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg">
                    <div>
                        <div className="relative pb-56 rounded shadow lg:pb-64">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-1.jpeg"
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col p-5 border border-gray-800">
                            <p className=' text-md'>BY: RASALINA\LIFE\23.01.2017</p>
                            <h1 className=' text-2xl mt-3'>Ideal Cocktails From Our Barmen For Pefect Mood</h1>
                            <div className=' text-md mt-5 flex items-center hover:cursor-pointer'>READ MORE <BsForward className=' text-3xl ml-2' /></div>
                        </div>
                    </div>
                    <div>
                        <div className="relative pb-56 rounded shadow lg:pb-64">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2.jpeg"
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col p-5 border border-gray-800">
                            <p className=' text-md'>BY: RASALINA\LIFE\23.01.2017</p>
                            <h1 className=' text-2xl mt-3'>Questions Business Must Be Able To Answers</h1>
                            <div className=' text-md mt-5 flex items-center hover:cursor-pointer'>READ MORE <BsForward className=' text-3xl ml-2' /></div>
                        </div>
                    </div>
                    <div>
                        <div className="relative pb-56 rounded shadow lg:pb-64">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-3.jpeg"
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col p-5 border border-gray-800">
                            <p className=' text-md'>BY: RASALINA\LIFE\23.01.2017</p>
                            <h1 className=' text-2xl mt-3'>Build A Cool Mornig With Cafena Coffee</h1>
                            <div className=' text-md mt-5 flex items-center hover:cursor-pointer'>READ MORE <BsForward className=' text-3xl ml-2' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurBlogs;