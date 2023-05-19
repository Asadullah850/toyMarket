import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-slate-950 text-white  rounded">
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
    );
};

export default Footer;