import React from 'react';

const Reservation = () => {
    return (
        <div className=' p-8 grid grid-cols-2 h-[500px]'>
            <img className=' h-full' src="https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png" alt="" />
            <div className=' border border-stone-700 bg-zinc-900 p-10 text-center'>
                <h1 className=' text-lg text-center w-36 border-y-8 mx-auto rounded-lg border-amber-700 font-bold p-2'>RESERVATION</h1><br />
                <h1 className=' text-4xl font-bold mb-3'>BOOKING A TABLE</h1>
                <input type="text" className=' w-[70%] p-3 rounded text-lg font-bold bg-slate-900 border border-slate-700 mb-3' placeholder='4 Person' />
                <input type="text" className=' w-[70%] p-3 rounded text-lg font-bold bg-slate-900 border border-slate-700 mb-3' placeholder='12/26/2022' />
                <input type="text" className=' w-[70%] p-3 rounded text-lg font-bold bg-slate-900 border border-slate-700 mb-3' placeholder='08:30 PM' /><br />
                <button className=' btn bg-amber-700 '>BOOK A TABLE</button>
            </div>
        </div>
    );
};

export default Reservation;