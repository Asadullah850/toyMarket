import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2';

const Cart = ({ toys }) => {
    const { _id, productPrice, rating, productName, productDescription, productImg, photoURL, displayName, discount, colors, category, AvailableQuantity } = toys
    const [wishlist, setWishlist] = useState(true)

    const handelWish = () => {
        setWishlist(!wishlist)
        if (wishlist) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Like',
                showConfirmButton: false,
                timer: 500
            })
        }
        // console.log(wishlist);
    }



    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className=" rounded-lg">
                <img className='w-full object-cover rounded-lg' src={productImg} alt="" />
                <div className=" relative bottom-36 left-5 inline-block">
                    {
                        wishlist ? <FaRegHeart className=' text-red-800 text-2xl' onClick={handelWish}></FaRegHeart> 
                        :
                         <FaHeart className=' text-red-900/75 text-2xl' onClick={handelWish} ></FaHeart>

                    }
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">Product Name: {productName}</h2>
                <p className='text-xl font-semibold'>Price:$ {productPrice}</p>
                <p>Rating: {rating}</p>
                <Rating className=' mt-4 pt-4 mr-auto inline-block'
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