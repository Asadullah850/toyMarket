import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Cart = ({ toys }) => {
    const { _id, productPrice,rating, productName, productDescription, productImg, photoURL, displayName, discount, colors, category, AvailableQuantity } = toys
    
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className=" rounded-lg">
            <img className='h-32 object-cover rounded-lg' src={productImg} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">Product Name: {productName}</h2>
                <p className='text-xl font-semibold'>Price:$ {productPrice}</p>
                <p>Rating: {rating}</p>
                <Rating className=' my-4 py-4 mr-auto inline-block'
                            style={{ maxWidth: 150 }}
                            value={rating}
                            readOnly
                        />
                <div className="card-actions justify-end">
                    <td><Link to={`/viewPage/${_id}`}><button className='btn btn-primary'>View</button></Link></td>
                </div>
            </div>
        </div>
    );
};

export default Cart;