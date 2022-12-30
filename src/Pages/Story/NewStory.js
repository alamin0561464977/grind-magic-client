import React, { useEffect, useState } from 'react';

const NewStory = () => {
    const [newStory, setNewStory] = useState([]);

    useEffect(() => {
        fetch('newStory.json')
            .then(res => res.json())
            .then(data => setNewStory(data))
    }, [])

    return (
        <div className=' container mx-auto my-16'>
            <h1 className=' text-5xl font-bold text-center py-8'>MAKE A NEW STORY WITH US</h1>
            <div className=' grid grid-col-1 lg:grid-cols-2 gap-8'>
                {
                    newStory.map(s =>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img className=' w-full' src={s.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{s.title}</h2>
                                <p>{s.description}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default NewStory;