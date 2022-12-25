import React, { useEffect, useState } from 'react';

const CoffeeMenu = () => {
    const [coffeeItems, setCoffeeItems] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setCoffeeItems(data))
    }, [])
    return (
        <div className=' py-8'>
            <div className=' text-center mb-5'>
                <samp className=' p-2 rounded text-xl font-bold bg-amber-700'>MENU</samp>
                <h1 className=' p-2 rounded text-4xl font-bold'>CAFENA POPULAR MENU</h1>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
                <div className="grid gap-8 row-gap-5 md:grid-cols-2">
                    {
                        coffeeItems.map(coffee =>
                            <div key={coffee.id} className="relative p-px overflow-hidden transition duration-300 transform border border-zinc-800 rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                                <div className="relative flex flex-col h-full p-2 rounded-sm lg:items-center lg:flex-row">
                                    <div className="mb-6 mr-6 lg:mb-0">
                                        <div className="flex items-center justify-center w-20 h-20 rounded-full lg:w-32 lg:h-32">
                                            <img src={coffee.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <div className=' flex justify-between items-center pr-2'>
                                            <h6 className="mb-2 font-bold text-xl">
                                                {coffee.name}
                                            </h6>
                                            <h6 className="mb-2 font-bold text-3xl text-amber-700">
                                                ${coffee.price}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CoffeeMenu;
