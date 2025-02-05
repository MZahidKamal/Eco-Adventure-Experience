import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa';
import footerBgImage from '../../assets/images/footer_background.jpg';


const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gray-900 text-white">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: `url(${footerBgImage})`, opacity: 0.2}} ></div>

            <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Eco-Adventure Experiences</h3>
                        <p className="mb-4">Explore nature, embrace adventure, and protect our planet.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-[#00b5ff] hover:text-[#1e90ff] transition-colors duration-300"><FaFacebookF size={24} /></a>
                            <a href="#" className="text-[#00b5ff] hover:text-[#1e90ff] transition-colors duration-300"><FaTwitter size={24} /></a>
                            <a href="#" className="text-[#00b5ff] hover:text-[#1e90ff] transition-colors duration-300"><FaInstagram size={24} /></a>
                            <a href="#" className="text-[#00b5ff] hover:text-[#1e90ff] transition-colors duration-300"><FaLinkedinIn size={24} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-[#00e6bb] transition-colors duration-300">Home</a></li>
                            <li><a href="#" className="hover:text-[#00e6bb] transition-colors duration-300">About Us</a></li>
                            <li><a href="#" className="hover:text-[#00e6bb] transition-colors duration-300">Adventures</a></li>
                            <li><a href="#" className="hover:text-[#00e6bb] transition-colors duration-300">Blog</a></li>
                            <li><a href="#" className="hover:text-[#00e6bb] transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-[#00e6bb] transition-colors duration-300">FAQ</a></li>
                            <li><a href="#" className="hover:text-[#00e6bb] transition-colors duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#00e6bb] transition-colors duration-300">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-[#00e6bb] transition-colors duration-300">Data Protection</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="inline-block bg-gradient-to-r from-[#00b5ff] to-[#00d1ee] text-white font-semibold py-2 px-10 rounded-full hover:from-[#1e90ff] hover:to-[#00b5ff] transition duration-300 ease-in-out transform hover:scale-105">Volunteer</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block bg-gradient-to-r from-[#00e6bb] to-[#90f489] text-white font-semibold py-2 px-12 rounded-full hover:from-[#00d1ee] hover:to-[#00e6bb] transition duration-300 ease-in-out transform hover:scale-105">Donate</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-700 my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">&copy; {currentYear} Eco-Adventure Experiences. All rights reserved.</p>
                    <p className="text-sm text-gray-400 mt-2 md:mt-0">Made with <FaHeart className="inline-block text-[#f9f871]" /> for nature lovers</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
