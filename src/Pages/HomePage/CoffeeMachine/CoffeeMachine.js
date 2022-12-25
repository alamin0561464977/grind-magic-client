import React from 'react';

const CoffeeMachine = () => {
    return (
        <div className=' p-10'>
            <div className=' grid grid-cols-3 gap-5'>
                <div className=' col-span-2 py-12 px-24'>
                    <h1 className=' text-4xl font-bold'>COFFEE MACHINE,BUY FOR HOME</h1>
                    <p className=' text-lg mt-7'>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. <br />
                        mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis.</p>
                    <button className=' btn bg-amber-900 mt-8'>DISCOVER NOW</button>
                </div>
                <div className=' col-span-1 text-center'>
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/product-big.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default CoffeeMachine;