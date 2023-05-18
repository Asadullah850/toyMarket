import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import Cart from '../Cart';
import Banner from './Banner';
import Gallery from './Gallery';

const Home = () => {
    const [toysData, setToysData] = useState([])
    const [loading, setloadng] = useState(true)
    // console.log(allToys);

    useEffect(() => {
        fetch(`http://localhost:3000/allToys`)
            .then(res => res.json())
            .then(data => {
                setToysData(data)
                setloadng(false)

            })
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div className="">
                <h1 className='text-2xl lg:text-4xl px-[2%] mx-2 mt-10 text-center'>Gallery Section</h1>
            </div>
            <Gallery></Gallery>
            {/* {
                toysData.map(toys => <Cart toys={toys} key={toys._id}></Cart>)
            } */}
           
        </div>
    );
};

export default Home;