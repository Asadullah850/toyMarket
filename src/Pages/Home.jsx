import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import Cart from './Cart';
import Banner from './Banner';

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
            {
                toysData.map(toys => <Cart toys={toys} key={toys._id}></Cart>)
            }
           
        </div>
    );
};

export default Home;