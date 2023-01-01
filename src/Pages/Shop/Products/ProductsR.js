import React from 'react';

const ProductsR = () => {
    return (
        <div>
            <div className=' border border-blue-300 rounded-lg p-8'>
                <h1 className=' text-3xl font-bold mb-5'>Search Here</h1>
                <div className='flex gap-5'>
                    <input type="text" placeholder='Search Blogs' className=' p-3 w-full rounded border border-black' />
                    <button className=' btn btn-outline btn-info font-bold'>Search</button>
                </div>
            </div>
            <div className=' border border-blue-300 rounded-lg p-8 mt-8'>
                <h1 className=' text-3xl font-bold mb-5'>Categories</h1>
                <div className='flex justify-between p-3 border border-slate-400 rounded-lg text-lg font-bold my-3 hover:border-black hover:cursor-pointer'>
                    <h1>Burger</h1>
                    <h1>07</h1>
                </div>
                <div className='flex justify-between p-3 border border-slate-400 rounded-lg text-lg font-bold my-3 hover:border-black hover:cursor-pointer'>
                    <h1>2x Pizza</h1>
                    <h1>05</h1>
                </div>
                <div className='flex justify-between p-3 border border-slate-400 rounded-lg text-lg font-bold my-3 hover:border-black hover:cursor-pointer'>
                    <h1>Cold Drinks</h1>
                    <h1>08</h1>
                </div>
                <div className='flex justify-between p-3 border border-slate-400 rounded-lg text-lg font-bold my-3 hover:border-black hover:cursor-pointer'>
                    <h1>Chicken</h1>
                    <h1>10</h1>
                </div>
                <div className='flex justify-between p-3 border border-slate-400 rounded-lg text-lg font-bold my-3 hover:border-black hover:cursor-pointer'>
                    <h1>Stuck Dish</h1>
                    <h1>04</h1>
                </div>
            </div>
            <div className=' border border-blue-300 rounded-lg p-8 my-8'>
                <h1 className=' text-3xl font-bold mb-5'>Search Here</h1>
                <div className='flex gap-3 my-3'>
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-1.png" alt="" className=' w-16 border border-black p-2 rounded-lg' />
                    <div className=' text-lg font-bold'>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h1>Coffe Americano</h1>
                        <h1>$325.00 / $348</h1>
                    </div>
                </div>
                <div className='flex gap-3 my-3'>
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-2.png" alt="" className=' w-16 border border-black p-2 rounded-lg' />
                    <div className=' text-lg font-bold'>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h1>Coffe Americano</h1>
                        <h1>$325.00 / $348</h1>
                    </div>
                </div>
                <div className='flex gap-3 my-3'>
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-3.png" alt="" className=' w-16 border border-black p-2 rounded-lg' />
                    <div className=' text-lg font-bold'>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h1>Coffe Americano</h1>
                        <h1>$325.00 / $348</h1>
                    </div>
                </div>
                <div className='flex gap-3 my-3'>
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/t-p-4.png" alt="" className=' w-16 border border-black p-2 rounded-lg' />
                    <div className=' text-lg font-bold'>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h1>Coffe Americano</h1>
                        <h1>$325.00 / $348</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsR;