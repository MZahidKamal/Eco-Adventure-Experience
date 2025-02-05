import Header from "../../Components/Header/Header.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Contact from "../../Components/Contact/Contact.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import {useEffect} from "react";


const ContactLayout = () => {


    /* SCROLL TO THE TOP OF THE PAGE WHEN THE COMPONENT LOADS. */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default ContactLayout;
