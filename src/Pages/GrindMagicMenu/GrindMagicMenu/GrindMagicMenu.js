import React from 'react';
import Menu from '../Menu/Menu';

const GrindMagicMenu = () => {
    return (
        <div className=''>
            <div className='AboutTopBanner mb-12 text-white lg:pl-14 lg:pt-28'>
                <h1 className=' text-6xl font-bold mb-3'>Grind Magic Menu</h1>
                <p className=' text-lg text-amber-700'>HOME / MENU</p>
            </div>
            <Menu></Menu>
        </div>
    );
};

export default GrindMagicMenu;