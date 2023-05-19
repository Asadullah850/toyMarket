import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Route/AuthProvider';
import MyToysRow from './MyToysRow';




const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myPost, setMyPost] = useState([])


    const url = `http://localhost:3000/products?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyPost(data)
            })
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        myPost.map((post, index) => <MyToysRow myPost={myPost} setMyPost={setMyPost} index={index} key={post._id} post={post}></MyToysRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;