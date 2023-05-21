import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import Cart from '../Cart';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import useTitle from '../../hooks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SliderProducts from './SliderProducts';


const Home = () => {
    useTitle('Home');
    const [toysData, setToysData] = useState([])
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("ToyCars")
    const [dollData, setDollData] = useState([]);
    const [categoryDoll, setCategoryDoll] = useState("Dolls")

    // console.log(allToys);

    if (loading) {
        <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>70%</div>
    }

    useEffect(() => {
        fetch(`https://toyserver-two.vercel.app/allToys`)
            .then(res => res.json())
            .then(data => {
                setToysData(data)
                setLoading(false)

            })
    }, [])

    useEffect(() => {
        fetch(`https://toyserver-two.vercel.app/category/${category}`)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setLoading(false)
            });
    }, [category]);

    useEffect(() => {
        fetch(`https://toyserver-two.vercel.app/category/${categoryDoll}`)
            .then((res) => res.json())
            .then((result) => {
                setDollData(result)
                setLoading(false)
            });
    }, [categoryDoll]);
    // Dolls

    AOS.init();
    return (
        
        <div>
            <Banner></Banner>
            <div className="">
                <h1 className='text-2xl lg:text-4xl px-[2%] mx-2 mt-10 text-center'>Gallery Section</h1>
            </div>
            <Gallery></Gallery>

           <h1 className='text-2xl lg:text-4xl px-[2%] mx-2 mt-10 text-center'>Shop by category</h1>
           <ShopByCategory></ShopByCategory>

            <h1 className='text-2xl lg:text-4xl px-[2%] mx-2 my-10 underline text-blue-600'>Doll Section</h1>
           <div  data-aos="flip-left" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
             {
                dollData.slice(4, 8).map(toys => <Cart toys={toys} key={toys._id}></Cart>)
            }
           </div>
           <div data-aos="fade-right" className=" max-sm:hidden">
           <h1 className='text-2xl lg:text-4xl px-[2%] mx-2 my-10 underline text-blue-600'>Slide Section</h1>
           <SliderProducts></SliderProducts>
           </div>
           
           <h1 className='text-2xl lg:text-4xl px-[2%] mx-2 my-10 underline text-blue-600'>Cars Section</h1>
           <div  data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {
                data.slice(0, 8).map(toys => <Cart toys={toys} key={toys._id}></Cart>)
            }
           </div>
           
        </div>
    );
};

export default Home;