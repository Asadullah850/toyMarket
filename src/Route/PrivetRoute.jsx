import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return (
            <div className=" flex justify-center">
                <div
                    className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>
            </div>
        );
    }
    
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;