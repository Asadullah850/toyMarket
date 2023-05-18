import React from 'react';

const Cart = ({ toys }) => {
    const { _id, productPrice, productName, productDescription, productImg, photoURL, displayName, discount, colors, category, AvailableQuantity } = toys
    console.log(toys);
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div className="w-full  rounded-lg">
            <img className=' object-cover rounded-lg' src={productImg} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;