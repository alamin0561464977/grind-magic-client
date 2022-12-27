import React from 'react';

const Top3CardHome = () => {
    return (
        <div>
            <div className="px-4 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-amber-700">01</p>
                                <p className="mb-4 text-2xl font-bold">Best Coffee flavour</p>
                                <p className="text-sm tracking-wide text-lg font-bold">
                                    Curabitur semper erat a lacusey sedn consequat, sit ametey.

                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://images.pexels.com/photos/2318017/pexels-photo-2318017.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-amber-700">02</p>
                                <p className="mb-4 text-2xl font-bold">Place to Get Lost</p>
                                <p className="text-sm tracking-wide text-lg font-bold">
                                    Curabitur semper erat a lacusey sedn consequat, sit ametey.

                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src="https://s3-media0.fl.yelpcdn.com/bphoto/axBFGVfopM5WVDoG9Yr5-g/l.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-amber-700">03</p>
                                <p className="mb-4 text-2xl font-bold">Proper Roesting</p>
                                <p className="text-sm tracking-wide text-lg font-bold">
                                    Curabitur semper erat a lacusey sedn consequat, sit ametey.

                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Top3CardHome;