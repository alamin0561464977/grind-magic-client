import React from 'react';
import { BsCalendar3, BsBookmarkHeart, BsChatText } from "react-icons/bs";


const BlogCard = ({ blog }) => {
    console.log(blog)
    const { image, title, paragraph, comment, userImage, userName, date } = blog;
    return (
        <div className=' border border-blue-300 my-8 p-8 rounded-lg'>
            <div>
                <img className=' w-full h-[450px] rounded-lg' src={image} alt="" />
            </div>
            <div className=' mt-5 flex'>
                <dir className=' flex items-center gap-2 text-gray-400'>
                    <BsBookmarkHeart className=' text-2xl' />
                    <h1 className=' font-bold'>Coffee</h1>
                </dir>
                <dir className=' flex items-center gap-2 text-gray-400'>
                    <BsChatText className=' text-2xl' />
                    <h1 className=' font-bold'>{comment} Comment</h1>
                </dir>
                <dir className=' flex items-center gap-2 text-gray-400'>
                    <BsCalendar3 className=' text-2xl' />
                    <h1 className=' font-bold'>{date}</h1>
                </dir>
            </div>
            <div className=' my-5'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p className=' text-lg text-gray-600 font-bold mt-3'>{paragraph}</p>
            </div>
            <div className=' mt-14 flex justify-between'>
                <div className=' flex gap-3 items-center'>
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={userImage} />
                        </div>
                    </div>
                    <h1 className=' text-xl font-bold'>{userName}</h1>
                </div>
                <button className=' btn btn-primary'>Read More</button>
            </div>
        </div>
    );
};

export default BlogCard;