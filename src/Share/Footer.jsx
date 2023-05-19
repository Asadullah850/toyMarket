import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <p className='text-center mt-10 font-extrabold text-lg mb-2'>Subscribe</p>
        <hr  className=' my-4 h-1 bg-blue-200' />
            <div className="relative mb-10">
                <img className='h-40 relative w-[80%] max-sm:w-[100%] mx-auto' src="https://i.ibb.co/dJVvpPv/louis-magnotti-r-Ecn8-OB83-EI-unsplash.jpg" alt="" srcset="" />
                <div className="absolute top-0 right-0 lg:right-1/3 w-full lg:w-96 rounded-lg bg-blue-700/40 p-8">
                    <p className=" font-bold">Newsletter</p>
                    <p className="label-text font-extrabold text-white">Enter your email address</p>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center  p-10 bg-slate-950 text-white  rounded">
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <div className="lg:mr-60 mr-10">
                            <Link className=" btn btn-ghost lg:text-xl font-press-start font-bold bg-slate-700 grid-flow-dense" to='/'>Toy-Markets</Link>
                        </div>
                        <div className="flex">
                            <Link to='https://www.facebook.com/'><FaFacebookF className=' text-4xl cursor-pointer '></FaFacebookF></Link>
                            <FaTwitterSquare className=' text-4xl cursor-pointer mx-2'></FaTwitterSquare>
                            <FaInstagram className=' text-4xl cursor-pointer '></FaInstagram>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by <Link to='https://www.facebook.com/groups/phwebdevelopmentbatch7'>Asadullah</Link></p>
                </div>
            </footer>
        </>
    );
};

export default Footer;