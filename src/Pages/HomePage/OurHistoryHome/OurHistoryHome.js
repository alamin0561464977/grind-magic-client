import React from 'react';

const OurHistoryHome = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center lg:flex-row border-2 border-slate-800">
                    <div className="relative lg:w-1/2">
                        <img
                            className="object-cover w-full h-[500px] shadow-lg sm:h-[500px]"
                            src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-bg-3-1.jpeg"
                            alt=""
                        />
                    </div>
                    <div className="mb-10 lg:max-w-lg lg:pr-5 ml-10 lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-lgh font-semibold tracking-wider border-y-8 rounded-lg border-amber-700 uppercase">
                                    OUR HISTORY
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                                CREATE A NEW STORY WITH US
                            </h2>
                            <p className="text-base md:text-lg">
                                Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.
                            </p>
                            <p className="text-base mt-8 md:text-lg">
                                Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurHistoryHome;