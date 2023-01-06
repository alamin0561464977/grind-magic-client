import React, { useEffect, useState } from 'react';
import { json, RouterProvider } from 'react-router-dom';
import { router } from '../../routers/router';
import { BsFillXCircleFill } from "react-icons/bs";


const CardR = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <RouterProvider router={router}></RouterProvider>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <h1 className=' text-xl font-bold my-5'>CART ITEMS - {products.length}</h1>
                        <hr />
                        <div>
                            {
                                products.map(product =>
                                    <div key={product.id} className='my-3 flex justify-between items-center'>
                                        <div className=' flex gap-5'>
                                            <img className=' w-20' src={product.image} alt="" />
                                            <div className='Settings'>

                                            </div>
                                        </div>
                                        <BsFillXCircleFill className=' text-2xl mx-3 hover:text-red-600' />
                                    </div>
                                )
                            }
                        </div>
                        <div className=' flex justify-between text-2xl font-bold my-4'>
                            <h1>Sub Total</h1>
                            <h1>$ 500</h1>
                        </div>
                        <div>
                            <button className=' btn btn-primary mr-5 font-bold'>View Card</button>
                            <button className=' btn btn-outline btn-info font-bold text-xl'>Checkout</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CardR;