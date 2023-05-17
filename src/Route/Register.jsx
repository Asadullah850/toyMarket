import React, { useContext, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import register from "../../public/105648-registration-form.json";
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState('')
    const [checked, setChecked] = useState(false);
    const {newUserSingUp} = useContext(AuthContext)


    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        setError('')
        if (password.length < 8) {
            return setError('Password must 8 character')
        }
        const userInput = {
            name,
            email,
            photo,
            password,
        }
        newUserSingUp(email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
            // ...
            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 1000,
                // timerProgressBar: true,
              })
              Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
              })
            
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 1000,
                // timerProgressBar: true,
              })
              Toast.fire({
                icon: 'error',
                title: 'Signed in error'
              })
          });
    }

    const handelCheck = () => {
        setChecked(!checked)
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 my-4 text-center">Register</h1>
            <hr className=' bg-slate-300 h-[2px]' />
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-100">
                <div className="bg-gray-100 max-sm:hidden">
                    <Lottie animationData={register} loop={true} />;
                </div>
                <div className="w-full max-w-md">

                    <form onSubmit={handelRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Enter username"
                                name='name'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                name='email'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
                                Picture Url
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="photo"
                                type="url"
                                placeholder="Enter Phot Url"
                                name='photo'
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                name='password'
                                required
                            />
                        </div>
                        <p className='text-red-800 my-2'>{error}</p>
                        <div onChange={handelCheck} className="mb-6">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-gray-600"
                                    required
                                />
                                <span className="ml-2 text-gray-700">
                                    I agree to the <a href="#" className="underline">terms and conditions</a>.
                                </span>
                            </label> <br />
                            <span className="ml-end text-blue-700">
                                <Link to='/login' className="underline">Al Ready Have An Account</Link>.
                            </span>
                        </div>
                        <div className=" flex items-center justify-between aria-disabled"
                        >
                            <button
                                className={checked ?
                                    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    :
                                    'bg-blue-500 opacity-50 cursor-not-allowed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                }
                                disabled={checked == false}
                                type="submit"
                            >
                                Register
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex text-lg my-auto"
                            >
                                <FaGoogle className='h-6 mr-2'></FaGoogle> SingIn Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;