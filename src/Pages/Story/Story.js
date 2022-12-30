import React from 'react';
import NewsBlogs from './NewsBlogs';
import NewStory from './NewStory';
import WhoWeAre from './WhoWeAre';

const Story = () => {
    return (
        <div>
            <div className='AboutTopBanner mb-12 text-white lg:pl-14 lg:pt-28'>
                <h1 className=' text-6xl font-bold mb-3'>Grind Magic Story</h1>
                <p className=' text-lg text-amber-700'>HOME / Story</p>
            </div>
            <WhoWeAre></WhoWeAre>
            <NewStory></NewStory>
            <NewsBlogs></NewsBlogs>
        </div>
    );
};

export default Story;