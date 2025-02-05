import Header from "../../Components/Header/Header.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";


const FeaturesLayout = () => {


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

export default FeaturesLayout;
