import React from 'react';

const BlogR = () => {
    return (
        <div className=' my-8'>
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
            <div className=' border border-blue-300 rounded-lg p-8 mt-8'>
                <h1 className=' text-3xl font-bold mb-5'>Popular Tag</h1>
                <div className=' flex gap-5 flex-wrap'>
                    <h1 className=' p-2 border border-slate-400  hover:border-black rounded-lg hover:cursor-pointer text-lg font-bold'>Web Design</h1>
                    <h1 className=' p-2 border border-slate-400  hover:border-black rounded-lg hover:cursor-pointer text-lg font-bold'>Brand</h1>
                    <h1 className=' p-2 border border-slate-400  hover:border-black rounded-lg hover:cursor-pointer text-lg font-bold'>Ui/Ux</h1>
                    <h1 className=' p-2 border border-slate-400  hover:border-black rounded-lg hover:cursor-pointer text-lg font-bold'>NNC</h1>
                    <h1 className=' p-2 border border-slate-400  hover:border-black rounded-lg hover:cursor-pointer text-lg font-bold'>Design</h1>
                    <h1 className=' p-2 border border-slate-400  hover:border-black rounded-lg hover:cursor-pointer text-lg font-bold'>Construction</h1>
                    <h1 className=' p-2 border border-slate-400  hover:border-black rounded-lg hover:cursor-pointer text-lg font-bold'>Web Design</h1>
                    <h1 className=' p-2 border border-slate-400  hover:border-black rounded-lg hover:cursor-pointer text-lg font-bold'>Design</h1>
                </div>
            </div>
        </div>
    );
};

export default BlogR;