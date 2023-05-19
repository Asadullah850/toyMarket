import React from 'react';
import {  Link } from 'react-router-dom';

const Table = ({ index, table }) => {
    const { _id, productPrice, productName, productDescription, productImg, photoURL, displayName, email, discount, colors, category, Subcategory, AvailableQuantity } = table;


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{displayName}<br /> {email}</td>
            <td>{productName}</td>
            <td>{Subcategory}</td>
            <td>${productPrice}</td>
            <td>{AvailableQuantity} P</td>
            <td>
                {
                    colors.map((td, index) => <p key={index}>{td.value}</p>)
                }
            </td>
            <td><Link to={`/viewPage/${_id}`}><button className='btn'>View</button></Link></td>
            
        </tr>
    );
};

export default Table;