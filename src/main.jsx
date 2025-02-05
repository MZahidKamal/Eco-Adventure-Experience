import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import MainLayout from "./Layouts/MainLayout/MainLayout.jsx";
import HomeLayout from "./Layouts/HomeLayout/HomeLayout.jsx";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout.jsx";
import Error404 from "./Components/Error404/Error404.jsx";
import Registration from "./Components/Registration/Registration.jsx";
import Login from "./Components/Login/Login.jsx";
import UserProfile from "./Components/UserProfile/UserProfile.jsx";
import ProfileUpdate from "./Components/ProfileUpdate/ProfileUpdate.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import ResetPassword from "./Components/ResetPassword/ResetPassword.jsx";
import FeaturesLayout from "./Layouts/FeaturesLayout/FeaturesLayout.jsx";
import ContactLayout from "./Layouts/ContactLayout/ContactLayout.jsx";
import Adventures from "./Components/Adventures/Adventures.jsx";
import FeatureAdventureDetails from "./Components/FeatureAdventureDetails/FeatureAdventureDetails.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error404></Error404>,
        children: [
            {
                path: "/",
                loader: async () => {
                    const response = await fetch('https://raw.githubusercontent.com/MZahidKamal/Eco-Adventure/refs/heads/main/adventures.json');
                    return await response.json();
                },
                element: <HomeLayout></HomeLayout>,
            },
            {
                path: "/auth",
                element: <AuthLayout></AuthLayout>,
                children: [
                    {
                        path: "/auth/registration",
                        element: <Registration></Registration>,
                    },
                    {
                        path: "/auth/login",
                        element: <Login></Login>,
                    },
                    {
                        path: "/auth/user_profile",
                        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
                    },
                    {
                        path: "/auth/profile_update",
                        element: <PrivateRoute><ProfileUpdate></ProfileUpdate></PrivateRoute>,
                    },
                    {
                        path: "/auth/reset_password",
                        element: <ResetPassword></ResetPassword>,
                    },
                ],
            },
            {
                path: "/features",
                element: <FeaturesLayout></FeaturesLayout>,
                children: [
                    {
                        path: "/features/adventures",
                        loader: async () => {
                            const response = await fetch('https://raw.githubusercontent.com/MZahidKamal/Eco-Adventure/refs/heads/main/adventures.json');
                            return await response.json();
                        },
                        element: <Adventures></Adventures>,
                    },
                    {
                        path: "/features/adventures/:id/details",
                        loader: async ({params}) => {
                            const response = await fetch('https://raw.githubusercontent.com/MZahidKamal/Eco-Adventure/refs/heads/main/adventures.json');
                            const dataArray = await response.json()
                            return dataArray.find(data => data.id === params.id);
                        },
                        element: <PrivateRoute><FeatureAdventureDetails></FeatureAdventureDetails></PrivateRoute>,
                    },
                ],
            },
            {
                path: "/contact",
                element: <ContactLayout></ContactLayout>,
            },
        ]
    },
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    </StrictMode>,
)
