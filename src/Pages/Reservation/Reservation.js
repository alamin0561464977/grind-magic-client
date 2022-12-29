import React from 'react';

const Reservation = () => {
    return (
        <div>
            <div className='AboutTopBanner mb-12 text-white lg:pl-14 lg:pt-28'>
                <h1 className=' text-6xl font-bold mb-3'>Reservation</h1>
                <p className=' text-lg text-amber-700'>HOME / Reservation</p>
            </div>
            <div className='reservation-bg-img p-24 border border-slate-400 container mx-auto rounded-lg'>
                <h1 className=' text-4xl font-bold text-center'>RESERVATION FORM</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className=' mt-12'>
                        <input type="text" placeholder="Inter Your Name" className="my-3 rounded-lg p-5 border border-blue-300 w-full" />
                        <input type="text" placeholder="Seats" className="my-3 rounded-lg p-5 border border-blue-300 w-full" />
                        <input type="time" className="my-3 rounded-lg p-5 border border-blue-300 w-full" />
                    </div>
                    <div className=' mt-12'>
                        <input type="text" placeholder="Inter Your Number" className="my-3 rounded-lg p-5 border border-blue-300 w-full" />
                        <input type="text" placeholder="Inter Your Email" className="my-3 rounded-lg p-5 border border-blue-300 w-full" />
                        <input type="date" className="my-3 rounded-lg p-5 border border-blue-300 w-full" />
                    </div>
                </div>
                <div className=' text-center'>
                    <input type="button" value='SUBMIT YOU REQUEST' className=" rounded-lg mt-5 bg-amber-700 text-white font-bold text-xl hover:bg-amber-600 p-5 border border-blue-300 w-full lg:w-1/2" />
                </div>
            </div>
        </div>
    );
};

export default Reservation;