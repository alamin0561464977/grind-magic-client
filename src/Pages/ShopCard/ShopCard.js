import React, { useEffect, useState } from 'react';
import { BsFillXCircleFill } from "react-icons/bs";


const ShopCard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='AboutTopBanner mb-12 text-white lg:pl-14 lg:pt-28'>
                <h1 className=' text-6xl font-bold mb-3'>Grind Magic Card</h1>
                <p className=' text-lg text-amber-700'>HOME / CARD</p>
            </div>
            <div className=' container mx-auto'>
                <div className="overflow-x-auto w-full text-lg">
                    <table className="table w-full my-12">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th className=' text-lg'>PRODUCT IMAGE</th>
                                <th className=' text-lg'>Coffee Name</th>
                                <th className=' text-lg'>Price</th>
                                <th className=' text-lg'>Quantity</th>
                                <th className=' text-lg'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            {
                                products.map(product =>
                                    <tr key={product.id}>
                                        <th>
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src={product.image} alt='' />
                                                </div>
                                            </div>
                                        </th>
                                        <td className=' text-xl font-bold'>
                                            {product.name}
                                        </td>
                                        <td>
                                            <h1 className=' text-xl font-bold'>$ {product.price}</h1>
                                        </td>
                                        <td className=' text-xl font-bold'>
                                            <input type="number" className=' w-16' defaultValue={product.quantity} />
                                        </td>
                                        <th>
                                            <button className="hover:text-red-600"><BsFillXCircleFill className=' text-3xl' /></button>
                                        </th>
                                    </tr>)
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th className=' text-lg font-bold'>APPLY COUPON</th>
                                <th className=' text-lg font-bold'>CLEAR CART</th>
                                <th className=' text-lg font-bold'>UPDATE CART</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className=' border mb-12 border-blue-300 p-5 mt-8 rounded-xl text-center'>
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
    );
};

export default ShopCard;