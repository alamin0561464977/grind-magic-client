import React from 'react';

const Gallery = () => {
    const images = [
        {
            id: 1,
            img: 'https://xpressrow.com/html/cafena/cafena/assets/images/gallery/gallery-1.jpeg'
        },
        {
            id: 2,
            img: 'https://xpressrow.com/html/cafena/cafena/assets/images/gallery/gallery-2.jpeg'
        },
        {
            id: 3,
            img: 'https://xpressrow.com/html/cafena/cafena/assets/images/gallery/gallery-3.jpeg'
        },
        {
            id: 4,
            img: 'https://xpressrow.com/html/cafena/cafena/assets/images/gallery/gallery-4.jpeg'
        },
        {
            id: 5,
            img: 'https://xpressrow.com/html/cafena/cafena/assets/images/gallery/gallery-6.jpeg'
        },
        {
            id: 6,
            img: 'https://xpressrow.com/html/cafena/cafena/assets/images/gallery/gallery-7.jpeg'
        }
    ]
    return (
        <div>
            <div className='AboutTopBanner mb-12 text-white lg:pl-14 lg:pt-28'>
                <h1 className=' text-6xl font-bold mb-3'>Grind Magic Gallery</h1>
                <p className=' text-lg text-amber-700'>HOME / Gallery</p>
            </div>
            <div className=' text-lg font-bold flex gap-5 justify-center border border-slate-600 w-[60%] mx-auto my-8 py-2 rounded'>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>ALL</h1>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>CHOCOLATE</h1>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>COFFEE</h1>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>SANDWICHES</h1>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>SWEETS</h1>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>BLACK TEA</h1>
                <h1 className=' hover:text-amber-700 hover:cursor-pointer'>GREEN TEA</h1>
            </div>
            <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
                        {
                            images.map(image => <div key={image.id} className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                                <div className="relative p-5 bg-white rounded-sm">
                                    <img className=' w-full h-[300px]' src={image.img} alt="" />
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;