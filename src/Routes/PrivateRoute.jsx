/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    // console.log("🚀 ~ file: PrivateRoute.jsx:9 ~ PrivateRoute ~ user:", user)
    // console.log("🚀 ~ file: PrivateRoute.jsx:9 ~ PrivateRoute ~ loading:", loading)

    if(user?.email){
        return children;
    }
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;