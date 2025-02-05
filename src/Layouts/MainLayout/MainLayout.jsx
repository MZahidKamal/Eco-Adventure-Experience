import {Outlet, useLocation} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from "react";
import 'animate.css';


const MainLayout = () => {


    /* SCROLL TO THE TOP OF THE PAGE WHEN THE COMPONENT LOADS. */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const currentUrl = useLocation();
    useEffect(() => {
        if(currentUrl.pathname === '/') document.title = "Eco Adventure | Home";
        if(currentUrl.pathname.includes('registration')) document.title = "Eco Adventure | Registration";
        if(currentUrl.pathname.includes('login')) document.title = "Eco Adventure | Login";
        if(currentUrl.pathname.includes('user_profile')) document.title = "Eco Adventure | User Profile";
        if(currentUrl.pathname.includes('profile_update')) document.title = "Eco Adventure | Update Profile";
        if(currentUrl.pathname.includes('reset_password')) document.title = "Eco Adventure | Reset Password";
        if(currentUrl.pathname.includes('contact')) document.title = "Eco Adventure | Contact Us";
        if(currentUrl.pathname.includes('adventures')) document.title = "Eco Adventure | All Adventures";
    }, [currentUrl]);


    return (
        <div>
            <Outlet></Outlet>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            ></ToastContainer>
        </div>
    );
};

export default MainLayout;
