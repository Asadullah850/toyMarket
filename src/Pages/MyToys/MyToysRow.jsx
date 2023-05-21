import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysRow = ({ post, index, myPost, setMyPost }) => {
    const { _id, productPrice, productName, discount, category, productImg, AvailableQuantity } = post;
    
    const handelDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't recover this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toyserver-two.vercel.app/products/${id}`, {
                            method: "DELETE"
                        })
                            .then(res => res.json())
                            .then(results => {
                                if (results.deletedCount > 0) {
                                    Swal.fire(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                    )
                                }
                                const remaining = myPost.filter(post => post._id !== id)
                                setMyPost(remaining)
                                console.log(result);
                            })
            }
          })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>
                <img className='h-10 w-10' src={productImg} alt="" srcset="" />
            </th>
            <td className='text-center'>{productName}</td>
            <td className='text-center'>${productPrice}</td>
            <td className='text-center'><span className='font-bold'>{discount?.value}</span> %</td>
            <td className='text-center'>{AvailableQuantity} P</td>
            <td className='text-center'>
                <Link to={`/update/${_id}`}><button className='btn mx-2 btn-primary'>Edit</button></Link>
                <button onClick={() => handelDelete(_id)} className='btn btn-primary'>Delete</button>
            </td>
        </tr>
    );
};

export default MyToysRow;