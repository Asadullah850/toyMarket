import React, { createContext, useEffect, useState } from 'react';


// export const AuthContext = createContext(null);

// const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
   

    const authInfo = {
        user,
        loading,
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;