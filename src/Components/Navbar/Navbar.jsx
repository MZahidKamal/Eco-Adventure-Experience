import {useContext, useState} from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import {Link, NavLink} from "react-router-dom";
import AuthContext from "../../Providers/AuthContext.jsx";


const Navbar = () => {

    const navMenuLinks = [
        {id: 1, path: '/', text: 'Home'},
        {id: 2, path: '/features/adventures', text: 'Adventures'},
        {id: 3, path: '/contact', text: 'Contact'},
    ];

    const {user, signOutCurrentUser} = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-[#1e90ff] to-[#00e6bb]">
            <div className="container mx-auto px-4 pb-6">
                <div className="flex flex-wrap items-center justify-between">

                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isMenuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                        </button>
                    </div>

                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0 lg:order-2`}>
                        <ul className="lg:flex lg:space-x-4 justify-center w-full">
                            {
                                navMenuLinks.map((item, index) => (
                                    <NavLink to={item.path} key={index}
                                             className={'block py-2 px-4 text-white hover:bg-[#00d1ee] rounded active:scale-95 transition transform duration-100'}>{item.text}</NavLink>
                                ))
                            }
                        </ul>
                    </div>

                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0 lg:order-3`}>
                        <div className="lg:flex lg:space-x-4 items-center">
                            <div className="flex items-center justify-center space-x-2 lg:justify-start mb-2 lg:mb-0">
                                {!user && <FaUser className="text-white"/>}
                                {user && <img src={user.photoURL} alt="" title={user.displayName} className="w-12 h-12 rounded-full object-cover border-4 border-[#00d1ee]"/>}
                                <span className="text-white font-semibold"> {user ? `${user.displayName}` : 'Profile'}</span>
                            </div>

                            {!user && <Link to={'/auth/registration'}
                                            className="w-full lg:w-auto bg-[#90f489] text-[#1e90ff] font-semibold py-2 px-4 rounded hover:bg-[#f9f871] active:scale-95 transition transform duration-100 mb-2 lg:mb-0">Register</Link>}

                            {user && <Link to={'/auth/user_profile'} className="w-full lg:w-auto bg-[#90f489] text-[#1e90ff] font-semibold py-2 px-4 rounded hover:bg-[#f9f871] active:scale-95 transition transform duration-100 mb-2 lg:mb-0">Profile</Link>}

                            {!user && <Link to={'/auth/login'} className="w-full lg:w-auto bg-[#00b5ff] text-white font-semibold py-2 px-4 rounded hover:bg-[#1e90ff] active:scale-95 transition transform duration-100">Login</Link>}

                            {user && <Link to={'/auth/login'} onClick={signOutCurrentUser} className="w-full lg:w-auto bg-[#00b5ff] text-white font-semibold py-2 px-4 rounded hover:bg-[#1e90ff] active:scale-95 transition transform duration-100">Logout</Link>}

                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
