import Header from "../../Components/Header/Header.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import AdventureExperiences from "../../Components/AdventureExperiences/AdventureExperiences.jsx";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs.jsx";
import NewsletterSubscription from "../../Components/NewsletterSubscription/NewsletterSubscription.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import {useEffect} from "react";


const HomeLayout = () => {


    /* SCROLL TO THE TOP OF THE PAGE WHEN THE COMPONENT LOADS. */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <AdventureExperiences></AdventureExperiences>
            <WhyChooseUs></WhyChooseUs>
            <NewsletterSubscription></NewsletterSubscription>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;
