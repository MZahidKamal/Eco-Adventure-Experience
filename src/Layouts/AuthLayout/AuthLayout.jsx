import {Outlet} from "react-router-dom";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import {useEffect} from "react";

const AuthLayout = () => {


    /* SCROLL TO THE TOP OF THE PAGE WHEN THE COMPONENT LOADS. */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;
