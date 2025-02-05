import {useContext, useEffect, useState} from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {Link, useLocation, useNavigate} from "react-router-dom";
import AuthContext from "../../Providers/AuthContext.jsx";
import {toast} from "react-toastify";


const Login = () => {


    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {user, signInExistingUsers, signInWithGoogle} = useContext(AuthContext);
    const currentUrl = useLocation();
    // console.log(currentUrl.state?.from.id);
    const navigate = useNavigate();


    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }


    const validateForm = () => {
        let newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {

            try {
                /* SIGNING IN THROUGH FIREBASE */
                await signInExistingUsers(formData.email, formData.password);
                event.target.reset();
                setErrors({});
            }catch (error) {
                toast.error('ERROR MESSAGE B:', error.message);
            }
        }
    };


    const handleGoogleLogin = async () => {
        try {
            /* SIGNING USING GOOGLE ACCOUNT THROUGH FIREBASE */
            await signInWithGoogle();
            setErrors({});
        } catch (error) {
            toast.error('ERROR MESSAGE B:', error.message);
        }
    };

    useEffect(() => {
        if (user) {
            if (currentUrl.state?.from.id !== undefined) {
                let desireId = currentUrl.state?.from.id;
                navigate(`/features/adventures/${desireId}/details`);
            }
            else {
                navigate('/auth/user_profile');
            }
        }
    }, [user, navigate, currentUrl.state?.from.id]);


    return (
        <div className="min-h-[calc(100vh-220px-377px)] flex items-center justify-center bg-gradient-to-r from-[#1e90ff] to-[#00e6bb] pb-10">
            <div className="bg-transparent/10 rounded-lg shadow-xl p-8 w-full max-w-xl">
                <h2 className="text-3xl font-bold text-center text-white mb-8 animate__animated animate__fadeInUp">User Login</h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="md:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder={'Email*'}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff]"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="md:col-span-2 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1"></label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder={'Password*'}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff]"
                        />
                        <button
                            type="button"
                            className="absolute top-4 right-0 pr-3 flex items-center text-sm leading-5"
                            onClick={togglePasswordVisibility}>
                            {
                                showPassword ?
                                    <FaEyeSlash className="h-5 w-5 text-gray-500"/> :
                                    <FaEye className="h-5 w-5 text-gray-500"/>
                            }
                        </button>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#00b5ff] to-[#00d1ee] text-white font-bold py-2 px-4 rounded-md hover:from-[#1e90ff] hover:to-[#00b5ff] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f9f871] focus:ring-opacity-50">
                            Login
                        </button>
                    </div>

                    <h4 className={'text-white text-center md:col-span-2'}>OR</h4>

                    <div className="md:col-span-2">
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00b5ff] focus:ring-opacity-50 flex items-center justify-center">
                            <FcGoogle className="mr-2 text-2xl"/>
                            Login with Google
                        </button>
                    </div>

                </form>

                <p className="text-sm text-[#f9f871] pt-5">Forgot password? Click <Link to={'/auth/reset_password'} className={'font-bold italic'}>Reset</Link>.</p>

                <p className="text-sm text-[#f9f871] pt-3">Not yet registered? Click <Link to={'/auth/registration'} className={'font-bold italic'}>Registration</Link>.</p>

            </div>
        </div>
    );
};

export default Login;
