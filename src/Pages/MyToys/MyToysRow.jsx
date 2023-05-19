import React from 'react';

const MyToysRow = ({post, index}) => {
    const { _id, productPrice, productName, discount, category, Subcategory, AvailableQuantity} = post
    return (
        <tr>
            <th>{index + 1}</th>
            <td className='text-center'>{productName}</td>
            <td className='text-center'>${productPrice}</td>
            <td className='text-center'><span className='font-bold'>{discount?.value}</span> %</td>
            <td className='text-center'>{AvailableQuantity}</td>
            <td className='text-center'>
                <button className='btn mx-2'>Edit</button>
                <button className='btn'>Delete</button>
            </td>
        </tr>
    );
};

export default MyToysRow;