import React, { useEffect, useState } from 'react';
import Table from './Table';

const ProductsAll = () => {
    const [allToys, setAlltoys] = useState([])
    const [loading, setloadng] = useState(true)
    // console.log(allToys);

    useEffect(() => {
        fetch(`http://localhost:3000/allToys`)
            .then(res => res.json())
            .then(data => {
                setAlltoys(data)
                setloadng(false)

            })
    }, [])
    return (
        <div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller Info</th>
                        <th>Toy Name</th>
                        <th>Subcategory</th>
                        <th>Price</th>
                        <th>AvailableQuantity</th>
                        <th>Available Color</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allToys.map((table, index) => <Table table={table} index={index}></Table>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductsAll;