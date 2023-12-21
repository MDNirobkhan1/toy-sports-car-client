import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Errorpage from "../pages/Home/ErrorPage/Errorpage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Details from "../pages/Details/Details";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },

      {
        path: "addToyCar",
        element: <AddToy />
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        )
      },
      {
        path: "allToy",
        element: (
          <PrivateRoute>
            <AllToy />
          </PrivateRoute>
        )
      },
      {
        path: "myToys",
        element: <MyToys />
      }
    ]
  }
]);

export default router;
