import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../Share/Loading';
import BlogCard from './BlogCard';
import BlogR from './BlogR';

const Blogs = () => {
    const { data: blogs, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://grind-magic-server-alamin0561464977.vercel.app/blogs');
            const data = res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='AboutTopBanner mb-12 text-white lg:pl-14 lg:pt-28'>
                <h1 className=' text-6xl font-bold mb-3'>Recent Blog</h1>
                <p className=' text-lg text-amber-700'>HOME / BLOGS</p>
            </div>
            <div className=' grid grid-cols-10 gap-8 container mx-auto'>
                <div className='col-span-6'>
                    {
                        blogs?.map(blog => <BlogCard blog={blog}></BlogCard>)
                    }
                </div>
                <div className=' col-span-4'>
                    <BlogR></BlogR>
                </div>
            </div>
        </div>
    );
};

export default Blogs;