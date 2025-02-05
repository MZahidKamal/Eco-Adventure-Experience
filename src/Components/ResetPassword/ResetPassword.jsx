import {useContext, useState} from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import AuthContext from "../../Providers/AuthContext.jsx";
import {toast} from "react-toastify";


const ResetPassword = () => {

    const [formData, setFormData] = useState({
        email: '',
    });

    const {resetPassword} = useContext(AuthContext);
    const navigateTo = useNavigate();

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            //console.log('Form submitted:', formData);

            try {
                /* SENDING PASSWORD RESET EMAIL THROUGH FIREBASE */
                await resetPassword(formData.email);
                event.target.reset();
                setErrors({});
                setTimeout(() => {
                    navigateTo('/auth/login');
                }, 200)
            } catch (error) {
                // Handle errors
                toast.error('ERROR MESSAGE B:', error.message);
            }
        }
    };


    return (
        <div className="min-h-[calc(100vh-220px-377px)] flex items-center justify-center bg-gradient-to-r from-[#1e90ff] to-[#00e6bb] pb-10">
            <div className="bg-transparent/10 rounded-lg shadow-xl p-8 w-full max-w-xl">
                <h2 className="text-3xl font-bold text-center text-white mb-8 animate__animated animate__fadeInUp">Reset Password</h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="md:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder={'Enter your email here*'}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff]"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#00b5ff] to-[#00d1ee] text-white font-bold py-2 px-4 rounded-md hover:from-[#1e90ff] hover:to-[#00b5ff] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f9f871] focus:ring-opacity-50">
                            Send password reset email
                        </button>
                    </div>

                </form>

                <p className="text-sm text-[#f9f871] pt-5">Not yet registered? Click <Link to={'/auth/registration'} className={'font-bold italic'}>Registration</Link>.</p>

            </div>
        </div>
    );
};

export default ResetPassword;
