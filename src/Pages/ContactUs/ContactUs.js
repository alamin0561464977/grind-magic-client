import React from 'react';
import { FaEnvelopeOpenText, FaPhoneSquareAlt } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div>
            <div className='AboutTopBanner mb-12 text-white lg:pl-14 lg:pt-28'>
                <h1 className=' text-6xl font-bold mb-3'>Get in touch</h1>
                <p className=' text-lg text-amber-700'>HOME / CONTACT</p>
            </div>
            <div className='contact-us-bg-img border m-12 border-spacing-2 border-slate-400'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto'>
                    <div className=' p-8 flex gap-5 items-center'>
                        <div>
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ci-1.png" alt="" />
                        </div>
                        <div>
                            <h2 className=' text-2xl font-bold'>Contact us</h2>
                            <div className='flex gap-2 items-center'>
                                <FaEnvelopeOpenText />
                                <p className='font-bold'>alamin977p@gmail.com</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaPhoneSquareAlt />
                                <p className='font-bold'>(+966) 561464977</p>
                            </div>
                        </div>
                    </div>
                    <div className=' p-8 flex gap-5 items-center'>
                        <div>
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ci-2.png" alt="" />
                        </div>
                        <div>
                            <h2 className=' text-2xl font-bold'>Our Location</h2>
                            <p>Hera Road 2344 <br /> Australia 897- South Side <br /> Melbon</p>
                        </div>
                    </div>
                    <div className=' p-8 flex gap-5 items-center'>
                        <div>
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ci-3.png" alt="" />
                        </div>
                        <div>
                            <h2 className=' text-2xl font-bold'>Opening HOurs</h2>
                            <p>Mon - Sat (8:00 - 6:00) <br /> Sunday - Closed</p>
                        </div>
                    </div>
                </div>
                <div className='p-12 text-center'>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <input type="text" placeholder="Type Your Name:" className=" p-4 border border-spacing-2 border-slate-500 input-bordered w-full" />
                        <input type="text" placeholder="Type Your Email:" className=" p-4 border border-spacing-2 border-slate-500 input-bordered w-full" />
                    </div>
                    <input type="text" placeholder="Type Your Subject:" className=" p-4 my-5 border border-spacing-2 border-slate-500 input-bordered w-full" />
                    <textarea className="textarea textarea-bordered w-full h-40" placeholder="Type Your Message"></textarea>
                    <input type="button" value='SEND MASSAGE' className=" p-4 my-5 bg-amber-700 text-white font-bold text-2xl rounded-lg hover:bg-amber-600  input-bordered w-full lg:w-1/3 mx-auto" />
                </div>
            </div>
            <div>
                <img className=' w-full h-[450px] pt-12' src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" alt="" />
            </div>
        </div>
    );
};

export default ContactUs;