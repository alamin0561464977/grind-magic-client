import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../routers/router';
import { BsPersonLinesFill, BsLockFill, BsBoxArrowRight, BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";

const Settings = () => {
    const [theme, setTheme] = useState(true)
    return (
        <div className="drawer drawer-end">
            <input id="settings" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <RouterProvider router={router}></RouterProvider>
            </div>
            <div className="drawer-side">
                <label htmlFor="settings" className="drawer-overlay"></label>
                <ul className="Settings text-white menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <div className=' border border-slate-600 p-2 rounded-lg flex gap-5'>
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div>
                            <h1 className=' text-xl font-bold text-white'>Al Amin</h1>
                            <h4 className=' font-bold text-slate-200'>alamin977@gmail.com</h4>
                        </div>
                    </div>
                    <div className=' my-5'>
                        <div className=' flex justify-between p-3 border-b-4 text-lg font-bold hover:border-blue-400 hover:cursor-pointer text-white my-2'>
                            <h1>Update Profile</h1>
                            <BsPersonLinesFill />
                        </div>
                        <div className=' flex justify-between p-3 border-b-4 text-lg font-bold hover:border-blue-400 hover:cursor-pointer text-white my-2'>
                            <h1>Change Password</h1>
                            <BsLockFill />
                        </div>
                        <div onClick={() => setTheme(!theme)} className=' flex justify-between p-3 border-b-4 text-lg font-bold hover:border-blue-400 hover:cursor-pointer text-white my-2'>
                            <h1>{theme ? 'Lite' : 'Dark'} Mode</h1>
                            {theme ? <BsFillBrightnessHighFill /> : <BsFillMoonFill />}
                        </div>
                        <div className=' flex justify-between p-3 border-b-4 text-lg font-bold hover:border-blue-400 hover:cursor-pointer text-white my-2'>
                            <h1>Logout</h1>
                            <BsBoxArrowRight className=' text-xl font-bold' />
                        </div>
                    </div>
                </ul>
            </div >
        </div >
    );
};

export default Settings;