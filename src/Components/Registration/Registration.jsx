import {useContext, useState} from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {Link, useNavigate} from "react-router-dom";
import AuthContext from "../../Providers/AuthContext.jsx";
import {toast} from "react-toastify";


const Registration = () => {


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        photoUrl: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    });


    const {signUpNewUser} = useContext(AuthContext);
    const navigate = useNavigate();


    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }


    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }


    const validateForm = () => {
        let newErrors = {};

        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        else if (!passwordPattern.test(formData.password)) {
            newErrors.password = `Password must contain at least one uppercase letter, one lowercase letter, one number and one special character like @ $ ! % * ? & #.`;
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.acceptTerms) {
            newErrors.acceptTerms = 'You must accept the terms and conditions';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            //console.log('Form submitted:', formData);
            // console.log(event.target)

            try {
                /* SIGNING UP THROUGH FIREBASE */
                await signUpNewUser(`${formData.firstName} ${formData.lastName}`, formData.photoUrl, formData.email, formData.password);
                event.target.reset();
                setErrors({});
                navigate('/auth/login');
            } catch (error) {
                // Handle errors
                toast.error('ERROR MESSAGE C:', error.message);
            }
        }
    };


    return (
        <div className="min-h-[calc(100vh-220px-377px)] flex items-center justify-center bg-gradient-to-r from-[#1e90ff] to-[#00e6bb] pb-10">
            <div className="bg-transparent/10 rounded-lg shadow-xl p-8 w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-center text-white mb-8 animate__animated animate__fadeInUp">User Registration</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1"></label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder={'First Name*'}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff]"
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1"></label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder={'Last Name*'}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff]"
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 mb-1"></label>
                        <input
                            type="url"
                            id="photoUrl"
                            name="photoUrl"
                            placeholder={'Photo URL'}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff]"
                        />
                    </div>
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
                    <div className="relative">
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
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ?
                                <FaEyeSlash className="h-5 w-5 text-gray-500"/> :
                                <FaEye className="h-5 w-5 text-gray-500"/>
                            }
                        </button>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>
                    <div className="relative">
                        <label htmlFor="confirmPassword"
                               className="block text-sm font-medium text-gray-700 mb-1"></label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder={'Confirm Password*'}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff]"
                        />
                        <button type="button"
                                className="absolute top-4 right-0 pr-3 flex items-center text-sm leading-5"
                                onClick={toggleConfirmPasswordVisibility}>
                            {
                                showConfirmPassword ?
                                    <FaEyeSlash className="h-5 w-5 text-gray-500"/>
                                    : <FaEye className="h-5 w-5 text-gray-500"/>
                            }
                        </button>
                        {errors.confirmPassword &&
                            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                    </div>

                    <div className="md:col-span-2">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="acceptTerms"
                                onChange={handleChange}
                                className="mr-2 focus:ring-[#00b5ff]"
                            />
                            <span className="text-sm text-gray-700">I accept the Terms & Conditions*</span>
                        </label>
                        {errors.acceptTerms && <p className="text-red-500 text-xs mt-1">{errors.acceptTerms}</p>}
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#00b5ff] to-[#00d1ee] text-white font-bold py-2 px-4 rounded-md hover:from-[#1e90ff] hover:to-[#00b5ff] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f9f871] focus:ring-opacity-50"
                        >
                            Register
                        </button>
                    </div>

                </form>
                <p className="text-sm text-[#f9f871] pt-5">Already have an account? Click <Link to={'/auth/login'} className={'font-bold italic'}>Login</Link>.</p>
            </div>
        </div>
    );
};


export default Registration;
