import React from 'react';
import { BsChevronBarDown } from "react-icons/bs";


const CustomerFeedback = () => {
    return (
        <div className=' py-8'>
            <div className=' text-center'>
                <span className=' text-lg border-y-8 rounded-lg border-amber-700 font-bold p-2'>CUSTOMER FEEDBACK</span>
                <h1 className=' text-4xl font-bold mt-5 '>OUR CUSTOMER REVIEW</h1>
                <h1 className=' flex justify-center mt-5'><BsChevronBarDown className=' text-4xl flex justify-center' /></h1>
            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className=' text-center '>
                            <p className=' font-bold'>Very good quality of food and service. Vast menu with child friendly items as well as <br /> local seafood and even entrees for those who dont like seafood. Great place! Thanks. <br /> We absolutely love everything there!</p>
                            <img className=' mx-auto my-5' src="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png" alt="" />
                            <h1 className=' text-2xl font-bold'>Rasalina De Willamson</h1>
                            <h1 className=' text-lg text-amber-700 font-bold'>Founder & co</h1>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[400px]">
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className=' text-center '>
                            <p className=' font-bold'>Very good quality of food and service. Vast menu with child friendly items as well as <br /> local seafood and even entrees for those who dont like seafood. Great place! Thanks. <br /> We absolutely love everything there!</p>
                            <img className=' mx-auto my-5' src="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png" alt="" />
                            <h1 className=' text-2xl font-bold'>Rasalina De Willamson</h1>
                            <h1 className=' text-lg text-amber-700 font-bold'>Founder & co</h1>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className=' text-center '>
                            <p className=' font-bold'>Very good quality of food and service. Vast menu with child friendly items as well as <br /> local seafood and even entrees for those who dont like seafood. Great place! Thanks. <br /> We absolutely love everything there!</p>
                            <img className=' mx-auto my-5' src="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png" alt="" />
                            <h1 className=' text-2xl font-bold'>Rasalina De Willamson</h1>
                            <h1 className=' text-lg text-amber-700 font-bold'>Founder & co</h1>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className=' text-center '>
                            <p className=' font-bold'>Very good quality of food and service. Vast menu with child friendly items as well as <br /> local seafood and even entrees for those who dont like seafood. Great place! Thanks. <br /> We absolutely love everything there!</p>
                            <img className=' mx-auto my-5' src="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png" alt="" />
                            <h1 className=' text-2xl font-bold'>Rasalina De Willamson</h1>
                            <h1 className=' text-lg text-amber-700 font-bold'>Founder & co</h1>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;