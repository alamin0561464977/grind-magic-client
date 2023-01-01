import React, { useEffect, useState } from 'react';
import { FaAngleDown, FaListUl, FaTh } from "react-icons/fa";
import ProductCard from './ProductCard';
import ProductsR from './ProductsR';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='AboutTopBanner mb-12 text-white lg:pl-14 lg:pt-28'>
                <h1 className=' text-6xl font-bold mb-3'>Grind Magic Products</h1>
                <p className=' text-lg text-amber-700'>HOME / PRODUCTS</p>
            </div>
            <div className=' container mx-auto'>
                <div className=' border border-blue-300 p-4 flex justify-between items-center rounded-lg mb-8'>
                    <h1 className=' text-xl font-bold text-slate-400'>Showing 1–12 of 54 results</h1>
                    <div className=' flex gap-5 items-center'>
                        <FaListUl className=' text-2xl hover:cursor-pointer' />
                        <FaTh className=' text-2xl hover:cursor-pointer' />
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className="m-1 text-xl font-bold flex gap-1 items-center">Short By New <FaAngleDown /></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-lg font-bold rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-10 gap-5'>
                <div className=' col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
                <div className=' col-span-4'>
                    <ProductsR></ProductsR>
                </div>
            </div>
        </div>
    );
};

export default Products;