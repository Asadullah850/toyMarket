import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import Creatable, { useCreatable } from 'react-select/creatable';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Route/AuthProvider';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';


const UpdateToys = () => {
    const toys = useLoaderData();
    // console.log(toys);

    const navigate = useNavigate();
    const { _id, productPrice, productName, productDescription, productImg, discount, photoURL, displayName, email, category, Subcategory, AvailableQuantity, rating } = toys;

    const { user } = useContext(AuthContext);

    const { register,
        formState: { errors }
    } = useForm();
    const onSubmit = data => {
        console.log(data);

    }

    const handelUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const productImg = form.productImg.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const Subcategory = form.Subcategory.value;
        const discount = form.discount.value;
        const AvailableQuantity = form.AvailableQuantity.value;
        const productDescription = form.productDescription.value;
        const formData = {
            productName,
            productPrice,
            productImg,
            rating,
            category,
            Subcategory,
            discount,
            AvailableQuantity,
            productDescription

        }
        fetch(`https://toyserver-two.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(results => {
                if (results.modifiedCount > 0) {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 1000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            })
                
                            Toast.fire({
                                icon: 'success',
                                title: 'Update Toy in successfully'
                            })
                            navigate('/mytoys')
                        } else {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 1000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            })
                            return Toast.fire({
                                icon: 'error',
                                title: 'Place Check Your Data Field'
                            })
                
                
                        }
                console.log(results);
            })
        console.log(formData)
    }



    return (
        <div className='w-[70%] mx-auto p-10 border-[2px] border-blue-200 rounded-lg'>
            <form onSubmit={handelUpdate} >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    <div className="">
                        <p>Product Name*</p>
                        {errors.exampleRequired && <p>* Required</p>}
                        <input defaultValue={productName} className=' border-2 border-blue-400 rounded p-2' {...register("productName", { required: true })} />
                        <br />
                        <p>Product Price*</p>
                        {errors.exampleRequired && <p>* Required</p>}
                        <input defaultValue={productPrice} type='number' className=' border-2 border-blue-400 rounded p-2' {...register("productPrice", { required: true })} />
                        <br />
                        <p>Product Image Url*</p>
                        {errors.exampleRequired && <p>* Required</p>}
                        <input defaultValue={productImg} className=' border-2 border-blue-400 rounded p-2' {...register("productImg", { required: true })} />
                        <br />
                        <p>Rating*</p>
                        {errors.exampleRequired && <p>* Required</p>}
                        <input defaultValue={rating} type='text' className=' border-2 border-blue-400 rounded p-2' {...register("rating", { required: true })} />
                    </div>
                    <div className="">
                        <p>Category*</p>
                        {errors.exampleRequired && <p>* Required</p>}
                        <select className=' border-2 border-blue-400 rounded p-2' defaultValue={category} {...register("category", { required: true })}>
                            <option value="ToyCars">Toy Cars</option>
                            <option value="ActionFigureToys">Action figure toys</option>
                            <option value="Dolls">Dolls</option>
                        </select>
                        <br />
                        <p>Sub-category*</p>
                        {errors.exampleRequired && <p>* Required</p>}
                        <select defaultValue={Subcategory} className=' border-2 border-blue-400 rounded p-2' {...register("Subcategory", { required: true })}>
                            <option value="Cars">Sports Car</option>
                            <option value="truck">Truck</option>
                            <option value="miniPoliceCar">Mini Police Car</option>
                            <option value="avengers">Avengers</option>
                            <option value="transformers">Transformers</option>
                            <option value="marvel">Marvel</option>
                            <option value="babyDolls">Baby Dolls</option>
                            <option value="barbie">Barbie</option>
                            <option value="AmericanGirl">American girl</option>
                        </select>
                        <br />
                        <p>Discount %</p>
                        <p>Previews Discount Value is {discount?.value} </p>
                        <input type='text' className=' border-2 border-blue-400 rounded p-2' {...register("discount")} />
                        <br />
                        <p>Available Quantity*</p>
                        {errors.exampleRequired && <p>* Required</p>}
                        <input defaultValue={AvailableQuantity} type='number' className=' border-2 border-blue-400 rounded p-2' {...register("AvailableQuantity", { required: true })} />

                    </div>
                </div>
                <p>Product Description*</p>
                <br />
                {errors.exampleRequired && <p>* Required</p>}
                <textarea defaultValue={productDescription} {...register("productDescription", { required: true })} className='w-[100%] border-2 border-blue-400 rounded p-2' ></textarea>
                {/* <input  type="submit" value={'Update'} /> */}
                <button className='btn w-full btn-primary my-2 bottom-0 relative'  type='submit'>submit</button>
            </form>
        </div>
    );
};

export default UpdateToys;