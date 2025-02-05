import { FaUser, FaEnvelope, FaCamera } from 'react-icons/fa';
import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../../Providers/AuthContext.jsx";


const UserProfile = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="min-h-[calc(100vh-220px-377px)] flex items-center justify-center bg-gradient-to-r from-[#1e90ff] to-[#00e6bb] pb-10">
            <div className="bg-transparent/10 rounded-lg shadow-xl p-8 w-full max-w-xl">

                <h2 className="text-lg italic text-center text-white mb-8 animate__animated animate__fadeInUp">Welcome <span className={'text-2xl font-bold not-italic'}>{user?.displayName}</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="md:col-span-2 flex justify-center">
                        <div className="relative">
                            <img src={user?.photoURL} alt='profile_picture'
                                 className="w-32 h-32 rounded-full object-cover border-4 border-[#00d1ee]"/>
                            <button
                                className="absolute bottom-0 right-0 bg-[#00b5ff] p-2 rounded-full text-white hover:bg-[#1e90ff] transition duration-300">
                                <FaCamera/></button>
                        </div>
                    </div>

                    <div className="md:col-span-2 flex items-center bg-white/20 p-3 rounded-md">
                        <FaUser className="text-[#f9f871] mr-3"/>
                        <div className={'flex items-center space-x-4'}>
                            <p className="text-sm text-gray-200">Full Name</p>
                            <p className="text-white font-semibold">{user?.displayName}</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 flex items-center bg-white/20 p-3 rounded-md">
                        <FaEnvelope className="text-[#f9f871] mr-3"/>
                        <div className={'flex items-center space-x-4'}>
                            <p className="text-sm text-gray-200">Email</p>
                            <p className="text-white font-semibold">{user?.email}</p>
                        </div>
                    </div>

                    <p className="text-sm text-[#f9f871] md:col-span-2">Need to update profile information? Click <Link
                        to={'/auth/profile_update'} className={'font-bold italic'}>Update</Link>.</p>

                </div>

            </div>
        </div>
    );
};

export default UserProfile;
