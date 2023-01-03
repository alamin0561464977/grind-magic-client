import React from 'react';

const Checkout = () => {
    return (
        <div>
            <div className='AboutTopBanner mb-12 text-white lg:pl-14 lg:pt-28'>
                <h1 className=' text-6xl font-bold mb-3'>Grind Magic Checkout</h1>
                <p className=' text-lg text-amber-700'>HOME / CHECKOUT</p>
            </div>
            <div className=' container mx-auto my-14'>
                <div className='m-4 lg:12 p-12 border border-blue-300 rounded-xl'>
                    <div className=' lg:flex gap-5 items-center my-8'>
                        <h1 className='text-2xl font-bold'>Payment Method</h1>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-lg font-bold mr-2">New Payment Card</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-lg font-bold mr-2">Paypal</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-lg font-bold mr-2">Cash On Delivery</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                            </label>
                        </div>
                    </div><hr />
                    <div className=' my-8'>
                        <div className=' lg:flex gap-5'>
                            <div className="form-control w-full text-lg font-bold">
                                <label className="label">
                                    <span className="">First Name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full text-lg font-bold">
                                <label className="label">
                                    <span className="">Last Name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="form-control w-full text-lg font-bold my-3">
                            <label className="label">
                                <span className="">Company Name (Optional)</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full text-lg font-bold my-3">
                            <label className="label">
                                <span className="">Country / Region</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full text-lg font-bold my-3">
                            <label className="label">
                                <span className="">Street Address</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full text-lg font-bold my-3">
                            <label className="label">
                                <span className="">Town / City</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full text-lg font-bold my-3">
                            <label className="label">
                                <span className="">Postcode / ZIP (Optional)</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className=' lg:flex gap-5 my-3'>
                            <div className="form-control w-full text-lg font-bold">
                                <label className="label">
                                    <span className="">Email</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full text-lg font-bold">
                                <label className="label">
                                    <span className="">Phone Number</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="form-control w-full text-lg font-bold">
                            <label className="label">
                                <span className="">Your Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Type here"></textarea>
                        </div>
                        <div className=' border border-blue-300 p-5 mt-8 rounded-xl text-center'>
                            <h1 className='text-2xl font-bold text-center'>Card Total</h1>
                            <div className=' text-ellipsis font-bold my-3 p-2 w-1/2 mx-auto  border rounded lg:flex justify-between'>
                                <h1>Sub Total</h1>
                                <h1>$ 550.00</h1>
                            </div>
                            <div className=' text-ellipsis font-bold my-3 p-2 w-1/2 mx-auto  border rounded lg:flex justify-between'>
                                <h1>Total</h1>
                                <h1>$ 600.00</h1>
                            </div>
                            <button className='btn btn-outline btn-info font-bold lg:btn-wide my-5'>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;