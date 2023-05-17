import { Outlet } from "react-router-dom";
import Navbar from "../Sharde/Navbar";
import Footer from "../Sharde/Footer";




const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;