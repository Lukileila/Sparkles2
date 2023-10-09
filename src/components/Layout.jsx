import Navbar from "./Navbar";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

export default function Login(){    
    return (
    <>
       <Navbar/>
        <Outlet />
        <Footer/>
    </>
    )
}
