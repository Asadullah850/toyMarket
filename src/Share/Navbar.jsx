import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { AuthContext } from '../Route/AuthProvider';


const Navbar = () => {
    const navItems = [
        { label: 'Home', url: '/' },
        { label: 'All Toys', url: '/allProducts' },
        { label: 'My Toys', url: '/mytoys' },
        { label: 'Add A Toy', url: '/addToy' },
        { label: 'Blogs', url: '/blog' },
    ]

    const { user, logOut } = useContext(AuthContext);

    const userLogOut =()=>{
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
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
                    <Link className="btn btn-ghost lg:text-xl  font-press-start font-bold" to='/'>Toy-Markets</Link>
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
                            {
                                user ? user.photoURL ? <><img src={user.photoURL} alt="" srcset="" /></> : <FaRegUser className='w-[100%] h-[80%]'></FaRegUser> : <FaRegUser className='w-[100%] h-[80%]'></FaRegUser>
                            }

                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-start'>
                            {
                                user ?
                                    <>
                                        <p>Name: {user.displayName || user.email}</p>
                                        <Link to='/'>My Toys</Link>
                                        <button onClick={userLogOut} >Logout</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className="">Login</Link>
                                        <Link to='register'>Registration</Link>
                                    </>
                            }
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;