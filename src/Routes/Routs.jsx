import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Errorpage from "../pages/Home/ErrorPage/Errorpage";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;