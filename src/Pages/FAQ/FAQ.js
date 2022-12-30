import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className='AboutTopBanner mb-12 text-white lg:pl-14 lg:pt-28'>
                <h1 className=' text-6xl font-bold mb-3'>asking question</h1>
                <p className=' text-lg text-amber-700'>HOME / FAQ</p>
            </div>
            <div className='border border-spacing-2 border-blue-300 p-12 container mx-auto mb-12 rounded-lg'>
                <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does this work?
                    </div>
                    <div className="collapse-content">
                        <p>Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Some menus are missing on a coffee shop page?
                    </div>
                    <div className="collapse-content">
                        <p>Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Do any of your cheeses contain enzymes derived from animal sources?
                    </div>
                    <div className="collapse-content">
                        <p>Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Are your menu prices the same as those at the Coffee house?
                    </div>
                    <div className="collapse-content">
                        <p>Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mt-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Are your doughs vegan or vegetarian friendly?
                    </div>
                    <div className="collapse-content">
                        <p>Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;