import React, { useEffect, useState } from 'react';
import { BsArrowRightSquare } from "react-icons/bs";
import { BsBasket2Fill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";


const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([]);
    useEffect(() => {
        fetch('popular-products.json')
            .then(res => res.json())
            .then(data => setPopularProducts(data))
    }, [])
    return (
        <div className=' container mx-auto py-10'>
            <div className="relative">
                <img
                    src="https://images.squarespace-cdn.com/content/v1/5d2de89b6590550001fe69c6/1608650203356-KFTT2UE9CERF4K35UAQV/image.jpg?format=1500w"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-75 pb-8">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div>
                            <span className=' text-lg border-y-8 rounded-lg border-amber-700 font-bold p-2'>POPULAR PRODUCTS</span>
                            <h1 className=' text-4xl font-bold mt-4'>CAFENA POPULAR PRODUCT</h1>
                            <h1 className=' text-md mt-4 flex justify-end items-center gap-2 hover:cursor-pointer'><u>VIEW ALL PRODUCT</u> <BsArrowRightSquare /></h1>
                        </div>
                    </div>
                    <div className=' grid grid-cols-3 gap-5 px-8'>
                        {
                            popularProducts.map(product =>
                                <div key={product.id} className=' h-[450px] border rounded hover:bg-slate-900'>
                                    <div className=' text-center flex gap-3 justify-center mt-3'>
                                        <h1 className=' text-xl w-14 font-bold border py-3 rounded hover:cursor-pointer hover:bg-amber-700'>
                                            <BsBasket2Fill className=' mx-auto' />
                                        </h1>
                                        <h1 className=' text-xl w-14 font-bold border py-3 rounded hover:cursor-pointer hover:bg-amber-700'>
                                            <BsFillSuitHeartFill className=' mx-auto' />
                                        </h1>
                                        <h1 className=' text-xl w-14 font-bold border py-3 rounded hover:cursor-pointer hover:bg-amber-700'>
                                            <BsFillEyeFill className=' mx-auto' />
                                        </h1>
                                    </div>
                                    <div>
                                        <img src={product.image} alt="" className=' my-5 mx-auto' />
                                    </div>
                                    <div className=' text-center'>
                                        <div className=' flex items-center justify-center'>
                                            <samp className=' text-xl font-bold mr-2'>COFFEE</samp>
                                            <div className="rating rating-sm">
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                        <h1 className=' text-xl font-bold'>{product.name}</h1>
                                        <h1 className=' text-lg font-bold'>PRICE- <samp className=' text-amber-700 text-2xl'>${product.price}</samp> / ${product.oPrice}</h1>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;