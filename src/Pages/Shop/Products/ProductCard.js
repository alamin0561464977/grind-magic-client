import React from 'react';
import { BsBasket2Fill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";


const ProductCard = ({ product }) => {
    return (
        <div className=' h-[450px] border rounded'>
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
                <img src={product.image} alt="" className=' my-5 mx-auto w-44 h-52' />
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
        </div>
    );
};

export default ProductCard;