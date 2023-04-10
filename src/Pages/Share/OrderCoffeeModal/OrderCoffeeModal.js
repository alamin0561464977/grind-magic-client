import React from 'react';

const OrderCoffeeModal = ({ coffeeInfo }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="OrderCoffeeModal" className="modal-toggle" />
            <div className="modal">
                <div className=" rounded-xl bg-slate-300 w-[900px] relative text-black">
                    <label htmlFor="OrderCoffeeModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=' grid grid-cols-2'>
                        <div className=''>
                            <img src={coffeeInfo?.image} className='w-full h-full p-5 rounded-lg' alt="" />
                        </div>
                        <div className='p-5'>
                            <div className=' bg-slate-500 rounded-xl p-5 font-bold mt-8'>
                                <div className='flex justify-between'>
                                    <div className=' '>
                                        <h3 className="text-2xl text-orange-800 font-bold">{coffeeInfo?.name}</h3>
                                        <h3 className=' text-xl font-bold'>Total: 500</h3>
                                    </div>
                                    <div className=' '>
                                        <h3>Quantity: 1</h3>
                                        <h3>Price: {coffeeInfo?.price}</h3>
                                        <h3>Text: 5.00</h3>
                                    </div>
                                </div>
                                <form action="">
                                    <div className=''>
                                        <label htmlFor="">Name:</label><br />
                                        <input type="text" placeholder='Name' className=' p-2 rounded-lg w-full' />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="">Location:</label><br />
                                        <input type="text" placeholder='Location' className=' p-2 rounded-lg w-full' />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="">Phone:</label><br />
                                        <input type="text" placeholder='Phone' className=' p-2 rounded-lg w-full' />
                                    </div>
                                    <input type="submit" value='SUBMIT' className=' bg-orange-800 mt-3 text-white font-bold p-2 rounded-lg w-full' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCoffeeModal;