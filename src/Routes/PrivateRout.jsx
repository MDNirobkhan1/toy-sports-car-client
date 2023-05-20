/* eslint-disable react/prop-types */
import { useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRout = ({children}) => {
    const {user,loading}= useState(AuthContext);

    if(user?.email){
        return children;
    }
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRout;