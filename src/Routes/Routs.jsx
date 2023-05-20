import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Errorpage from "../pages/Home/ErrorPage/Errorpage";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import Blog from "../pages/Blog/Blog";
import Details from "../pages/Details/Details";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
// import PrivateRout from "./PrivateRout";


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
        },
        {
          path: 'blog',
          element:<Blog></Blog>
        },
        {
          path:'addToyCar',
          element:<AddToy></AddToy>
        },
        {
          path:'/details/:id',
          element:<Details></Details>
        },
        {
          path:'allToy',
          element:<AllToy></AllToy>
        }
      ]
    },
  ]);

  export default router;