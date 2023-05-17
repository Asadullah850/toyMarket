import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import { createUserWithEmailAndPassword, getAuth, updatePassword } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const newUserSingUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email , password)
    }
   

    const authInfo = {
        user,
        loading,
        newUserSingUp

    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;