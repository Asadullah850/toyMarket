import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";


const Navbar = () => {
    const navItems = [
        { label: 'Home', url: '/' },
        { label: 'All Toys', url: '/' },
        { label: 'My Toys', url: '/' },
        { label: 'Add A Toy', url: '/' },
        { label: 'Blogs', url: '/' },
    ]
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItems.map((nav, index) => <li className=' border-x-2 rounded-lg' key={index}><NavLink to={nav.url}>{nav.label}</NavLink></li>)
                        }
                    </ul>
                </div>
                <a className=" bg-none w-56">
                    <Link className="btn btn-ghost text-xl font-press-start font-bold" to='/'>Toy-Markets</Link>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItems.map((nav, index) => <li className=' border-x-2 rounded-lg' key={index}><NavLink to={nav.url}>{nav.label}</NavLink></li>)
                    }
                </ul>
            </div>
            <div className="navbar-end lg">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle border-[1px] border-blue-800 avatar">
                        <div className="w-10 rounded-full">
                            <FaRegUser className='w-[100%] h-[80%]'></FaRegUser>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><Link to='/login' className="">Login</Link></li>
                        <li><Link to='register'>Registration</Link></li>
                        <li><Link to='/'>Post Events</Link></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;