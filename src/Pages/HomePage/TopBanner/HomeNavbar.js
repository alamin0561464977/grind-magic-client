import React from 'react';
import { Link } from 'react-router-dom';

const HomeNavbar = () => {
    const navItems = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/grind-magic-menu'>MENU</Link></li>
        <li><Link to='/reservation'>RESERVATION</Link></li>
    </>
    return (
        <div>
            <div className="navbar text-white h-32 border-b border-slate-800">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="hidden lg:grid grid-cols-10 gap-7">
                    <ul className="menu menu-horizontal col-span-3 flex-none font-bold text-lg px-2">
                        {navItems}
                    </ul>
                    <div className="navbar-center-*9 col-span-3 grow mx-auto">
                        <a>
                            <img className='w-20 h-20 rounded-lg' src="https://static.vecteezy.com/system/resources/previews/010/160/674/original/coffee-icon-sign-symbol-design-free-png.png" alt="" />
                        </a>
                    </div>
                    <ul className="menu menu-horizontal flex-none col-span-2  font-bold text-lg px-2">
                        <li tabIndex={0}>
                            <a>
                                PAGES
                            </a>
                            <ul className="p-2 bg-white text-black">
                                <li><Link to='/blogs'>Blogs</Link></li>
                                <li><Link to='/blog-details'>Blog Details</Link></li>
                                <li><Link to='/chefs'>Chefs</Link></li>
                                <li><Link to='/faq'>FAQ</Link></li>
                                <li><Link to='/story'>Story</Link></li>
                                <li><Link to='/gallery'>Gallery</Link></li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                SHOP
                            </a>
                            <ul className="p-2 bg-white text-black">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><Link to='/contact-us'>CONTACT</Link></li>
                    </ul>
                    <ul className="menu grid grid-cols-3 gap-3 col-span-2 menu-horizontal flex-none font-bold text-lg px-2">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomeNavbar;