import React, { useEffect, useState } from 'react';
import Table from './Table';

const ProductsAll = () => {
    const [allToys, setAlltoys] = useState([])
    const [loading, setloadng] = useState(true)
    const [search, setSearch] = useState("")


    useEffect(() => {
        fetch(`http://localhost:3000/allToys`)
            .then(res => res.json())
            .then(data => {
                setAlltoys(data)
                setloadng(false)

            })
    }, [])


    const handelsearch = (text) => {
        fetch(`http://localhost:3000/search/${search}`)
            .then(res => res.json())
            .then(data => {
                setAlltoys(data);
            })
    }
    return (
        <div>
            <div className="form-control mx-[30%] my-4">
                <div className="input-group">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                    <button onClick={handelsearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller Info</th>
                        <th>Toy Name</th>
                        <th>Subcategory</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Color</th>
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