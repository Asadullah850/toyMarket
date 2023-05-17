import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);

    return (
        <div className="bg-[url('https://i.ibb.co/9TsK5Wm/404.gif')] h-[100vh]">
            <div className="text-center ">
                <div className="m-4 p-8 rounded shadow-lg">
                    <p className="text-gray-700 mb-8 text-5xl font-bold">Oops!</p>
                    <p className="text-gray-700 mb-8 text-2xl">{error.data}</p>
                    <a
                        href="/"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Go back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;