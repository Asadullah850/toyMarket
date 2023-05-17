import React, { useState, useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import login from "../../public/login-and-sign-up.json";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { googleNewUser, loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';

    const handelLoginUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userData = {
            email, password
        }
        setError('')
        loginUser(email, password)
        .then((result) => {
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-center',
                showConfirmButton: false,
                timer: 800,
                // timerProgressBar: true,
            })
            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            })
            navigate(from, { replace: true})
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        });

    }

    const googleLogin = () => {
        googleNewUser()
            .then((result) => {
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-center',
                    showConfirmButton: false,
                    timer: 800,
                    // timerProgressBar: true,
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                })
                navigate(from, { replace: true})
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }


    return (
        <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Login</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-100">
                <div className="max-sm:hidden h-[80vh]">
                    <Lottie animationData={login} loop={true} />
                </div>
                <div className="h-[100vh] py-auto">
                    <form onSubmit={handelLoginUser} className="h-[60vh] bg-white shadow-lg border-[1px] border-gray-400 rounded px-8 py-[20%]">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[1px] border-slate-300"
                                name='email'
                                placeholder='example@example.com'
                                type="email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border-[1px] border-slate-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                name='password'
                                placeholder="Enter password"
                            />
                        </div>
                        <p className="ml-end text-blue-700 my-4">{error}</p>
                        <div className="ml-end text-blue-700 my-4">
                            <Link to='/register' className="underline">I Have No Account</Link>.
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>
                            <button
                                onClick={googleLogin}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex text-lg my-auto">
                                <FaGoogle className='h-6 mr-2'></FaGoogle> SingIn Google
                            </button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;