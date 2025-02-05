import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {Link} from "react-router-dom";
import BannerImage01 from '../../assets/images/banner_background_01.jpg';
import BannerImage02 from '../../assets/images/banner_background_02.jpg';
import BannerImage03 from '../../assets/images/banner_background_03.jpg';


const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Mountain Treks",
            subtitle: "Conquer peaks, embrace nature",
            image: BannerImage01
        },
        {
            title: "Ocean Dives",
            subtitle: "Explore the underwater world",
            image: BannerImage02
        },
        {
            title: "Wildlife Safaris",
            subtitle: "Witness nature's majestic creatures",
            image: BannerImage03
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleHowWeWork = () => {
        document.getElementById('how-we-work').scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="relative h-[691px] overflow-hidden">
            {
                slides.map((slide, index) => (
                    <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>

                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover"/>

                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">

                            <h2 className="text-4xl md:text-7xl italic font-bold text-white mb-4 animate__animated animate__fadeInUp">{slide.title}</h2>
                            <p className="text-xl md:text-2xl text-[#f9f871] mb-8">{slide.subtitle}</p>

                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link to={'/features/adventures'}
                                    className="bg-[#00e6bb] text-[#1e90ff] font-semibold py-2 px-6 rounded-full hover:bg-[#90f489] active:scale-95 transition transform duration-100">
                                    See All Adventures
                                </Link>
                                <button
                                    onClick={handleHowWeWork}
                                    className="bg-[#00b5ff] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#1e90ff] active:scale-95 transition transform duration-100">
                                    How We Work
                                </button>
                            </div>

                        </div>
                    </div>
                ))
            }

            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-[#1e90ff] hover:bg-opacity-75 transition duration-300">
                <FaChevronLeft size={24} />
            </button>

            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-[#1e90ff] hover:bg-opacity-75 transition duration-300">
                <FaChevronRight size={24} />
            </button>

        </div>
    );
};

export default Banner;
