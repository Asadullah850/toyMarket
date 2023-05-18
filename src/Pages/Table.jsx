import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Table = ({ index, table }) => {
    // const navigate = useNavigate()
    const { _id, productPrice, productName, productDescription, productImg, photoURL, displayName, email, discount, colors, category, Subcategory, AvailableQuantity } = table;

    // const handelView =(id)=>{
    //     console.log(id);
    //     // navigate('/viewPage')
    // onClick={()=>handelView(_id)}
        
    // }

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