/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext =createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);


    const authInfo={

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;