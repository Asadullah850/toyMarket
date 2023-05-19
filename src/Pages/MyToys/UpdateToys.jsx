import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import Creatable, { useCreatable } from 'react-select/creatable';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Route/AuthProvider';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const options = [
    { value: 'Red', label: 'Red' },
    { value: 'Orange', label: 'Orange' },
    { value: 'White', label: 'White' },
];
const discountPrice = [
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
];

const UpdateToys = () => {
    const toys = useLoaderData();
    const navigate = useNavigate();
    const { _id, productPrice, productName, productDescription, productImg, discount, photoURL, displayName, email, colors, category, Subcategory, AvailableQuantity, rating } = toys;

    const { user } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null)
    const [discounts, setDiscount] = useState(null)


    const { register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = data => {
        data.colors = selectedOption
        data.discounts = discounts

        fetch(`http://localhost:3000/products/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
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
                }else{
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
                        icon: 'error',
                        title: 'Place Check Your Data Field'
                    })
                    return

                }
                
            })
            navigate('/mytoys')

    }


    return (
        <div className='w-[70%] mx-auto p-10 border-[2px] border-blue-200 rounded-lg'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    <div className="">
                        <div className="hidden">
                            {
                                user ?
                                    <>
                                        <input className=' border-2 border-blue-400 rounded p-2' defaultValue={`${user.displayName}`} {...register("displayName")} />
                                        <input defaultValue={`${user.photoURL}`} className=' border-2 border-blue-400 rounded p-2' {...register("photoURL")} />
                                        <input defaultValue={`${user.email}`} className=' border-2 border-blue-400 rounded p-2' {...register("email")} />
                                    </>
                                    :
                                    <>
                                    </>
                            }
                        </div>
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
                        <br />
                        <p>Discount %</p>
                        <p>Previews Discount Value is {discount?.value} </p>
                        <Creatable className=' border-2 border-blue-400 rounded p-2'
                            defaultValue={selectedOption}
                            onChange={setDiscount}
                            options={discountPrice}
                        />
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
                        <p>Colors*</p>
                        {errors.exampleRequired && <p>* Required</p>}
                        <p>Previews Discount Value is - (
                            {
                                colors?.map(c=><span>{c.value},</span>)
                            }
                        )
                        </p>
                        <Creatable className=' border-2 border-blue-400 rounded p-2'
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                        />
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
                <input className='btn w-full btn-primary my-2 bottom-0 relative' type="submit" value={'Update'} />
            </form>
        </div>
    );
};

export default UpdateToys;