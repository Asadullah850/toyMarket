import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ViewDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [loader, setloader] = useState(true)

    const { _id, productPrice, productName, productDescription, productImg, Subcategory, photoURL, email, displayName, rating, discount, colors, category, AvailableQuantity } = data;
    // console.log(_id);

    useEffect(() => {
        fetch(`http://localhost:3000/allToys/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data);
                setloader(false)
            })
    }, [])

    return (
        <div className="hero my-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={productImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold my-4">{productName}</h1>
                    <tr >
                        <td className='my-2 p-2 border-2 rounded border-blue-400 text-xl'>Price : {productPrice}</td>
                        <td className='my-2 p-2 border-2 rounded border-blue-400 mx-2'>Discount: {discount?.value}</td>
                    </tr>
                    <tr >
                        <td className='my-2 p-2 border-2 rounded border-blue-400'> Category: {category}</td>
                        <td className='my-2 p-2 border-2 rounded border-blue-400'> Subcategory:  {Subcategory}</td>
                    </tr>

                    <p className='my-2 p-2 border-2 rounded border-blue-400 inline-block'>
                        Colors:
                        {
                            colors?.map(p => <td>{p.value},</td>)
                        }
                    </p>


                    <p className='my-2 p-2 border-2 rounded border-blue-400 text-xl'><span className='mx-4'>AvailableQuantity:</span> {AvailableQuantity}</p>
                    <p className="py-6">
                        <p className='text-lg'>ProductDescription : </p>
                        {productDescription}</p>

                    <p className='my-2 p-2 border-l-2 rounded border-blue-400 font-bold text-xl'>Seller Info</p>

                    <p className='my-2 p-2 border-2 rounded border-blue-400'>{displayName}</p>
                    <p className='my-2 p-2 border-2 rounded border-blue-400'>{email}</p>
                    <p className='my-2 border-x-2 rounded border-blue-400 relative'>
                        <div className="">
                        <Rating className=' my-4 py-4 mr-auto inline-block'
                            style={{ maxWidth: 150 }}
                            value={rating}
                            readOnly
                        />
                        </div>
                        <div className='absolute bottom-0 text-lg rounded-full right-0 p-4 bg-yellow-300'>{rating}</div>
                    </p>
                    <div className=" text-end">
                        <Link to='/allProducts'><button className="btn btn-primary mx-4">All Toys</button></Link>
                        <Link to='/'><button className="btn btn-primary ">Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;