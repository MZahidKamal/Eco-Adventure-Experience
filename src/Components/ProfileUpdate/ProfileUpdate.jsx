import {useContext, useState} from 'react';
import { FaCamera } from 'react-icons/fa';
import AuthContext from "../../Providers/AuthContext.jsx";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


const ProfileUpdate = () => {

    const {updateExistingUsers} = useContext(AuthContext);
    const navigateTo = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        photoUrl: ``,
    });

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

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.photoUrl.trim()) {
            newErrors.photoUrl = 'Photo URL is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            //console.log('Form submitted:', formData);

            try {
                /* SIGNING UP THROUGH FIREBASE */
                await updateExistingUsers(`${formData.firstName} ${formData.lastName}`, formData.photoUrl);
                event.target.reset();
                setErrors({});
                /*setTimeout(()=>{
                    navigateTo('/auth/user_profile');
                }, 1000)*/
            } catch (error) {
                // Handle errors
                toast.error('ERROR MESSAGE B:', error.message);
            } finally {
                navigateTo('/auth/user_profile');
            }
        }
    };


    return (
        <div className="min-h-[calc(100vh-220px-377px)] flex items-center justify-center bg-gradient-to-r from-[#1e90ff] to-[#00e6bb] pb-10">
            <div className="bg-transparent/10 rounded-lg shadow-xl p-8 w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-center text-white mb-8 animate__animated animate__fadeInUp">Update Profile</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2 flex justify-center mb-6">
                        <div className="relative">
                            <img
                                src={formData.photoUrl}
                                alt=""
                                className="w-32 h-32 rounded-full object-cover border-4 border-[#00d1ee]"
                            />
                            <label htmlFor="photoUrl" className="absolute bottom-0 right-0 bg-[#00b5ff] p-2 rounded-full text-white hover:bg-[#1e90ff] transition duration-300 cursor-pointer">
                                <FaCamera />
                            </label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white mb-1">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-white/20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff] text-white placeholder-white/50"
                            placeholder="Enter your first name"
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-white mb-1">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-white/20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff] text-white placeholder-white/50"
                            placeholder="Enter your last name"
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="photoUrl" className="block text-sm font-medium text-white mb-1">Photo URL</label>
                        <input
                            type="url"
                            id="photoUrl"
                            name="photoUrl"
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-white/20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff] text-white placeholder-white/50"
                            placeholder="Enter the URL of your profile photo"
                        />
                        {errors.photoUrl && <p className="text-red-500 text-xs mt-1">{errors.photoUrl}</p>}
                    </div>
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#00b5ff] to-[#00d1ee] text-white font-bold py-2 px-4 rounded-md hover:from-[#1e90ff] hover:to-[#00b5ff] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f9f871] focus:ring-opacity-50"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdate;
