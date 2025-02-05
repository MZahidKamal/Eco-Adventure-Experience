import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { FiMapPin, FiClock, FiUsers, FiCheckCircle, FiAlertTriangle, FiDollarSign, FiX, FiCalendar, FiVideo} from 'react-icons/fi';
import { MdEco } from 'react-icons/md';
import {useLoaderData} from "react-router-dom";


const FeatureAdventureDetails = () => {


    const adventure = useLoaderData();


    const [showBookingModal, setShowBookingModal] = useState(false);
    const [showConsultationModal, setShowConsultationModal] = useState(false);
    const [currentHour, setCurrentHour] = useState(0);


    useEffect(() => {
        const updateCurrentHour = () => {
            const now = new Date();
            setCurrentHour(now.getHours());
        };
        updateCurrentHour();
        const interval = setInterval(updateCurrentHour, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);


    /* SCROLL TO THE TOP OF THE PAGE WHEN THE COMPONENT LOADS. */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const handleConsultation = () => {
        if (currentHour >= 10 && currentHour < 20) {
            window.open('https://meet.google.com/iut-jiog-kas', '_blank');
        } else {
            setShowConsultationModal(true);
        }
    };


    return (
        <div className="min-h-screen bg-gray-50">

            {/* HERO SECTION */}
            <div className="relative h-[60vh] lg:h-[70vh]">
                <img src={adventure.image} alt={adventure.title} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
                        <span className="inline-block bg-[#1e90ff] text-white px-4 py-1 rounded-full text-sm mb-4">{adventure.category}</span>
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 animate__animated animate__fadeInUp">{adventure.title}</h1>
                        <p className="text-lg text-gray-200 max-w-2xl">{adventure.shortDescription}</p>
                    </div>
                </div>
            </div>


            {/* MAIN CONTENT */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Left Column - Details */}
                    <div className="lg:col-span-2 space-y-8">


                        {/* QUICK INFORMATION */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="flex items-center text-[#1e90ff] mb-2">
                                    <FiMapPin className="mr-2"/>
                                    <span className="font-semibold">Location</span>
                                </div>
                                <p>{adventure.location}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="flex items-center text-[#00b5ff] mb-2">
                                    <FiClock className="mr-2"/>
                                    <span className="font-semibold">Duration</span>
                                </div>
                                <p>{adventure.duration}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="flex items-center text-[#00d1ee] mb-2">
                                    <FiUsers className="mr-2"/>
                                    <span className="font-semibold">Group Size</span>
                                </div>
                                <p>Max {adventure.maxGroupSize} people</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="flex items-center text-[#00e6bb] mb-2">
                                    <FiAlertTriangle className="mr-2"/>
                                    <span className="font-semibold">Level</span>
                                </div>
                                <p>{adventure.adventureLevel}</p>
                            </div>
                        </div>


                        {/* INCLUDED ITEMS */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4 text-[#1e90ff]">Whats Included</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {
                                    adventure.includedItems.map((item, index) => (
                                        <div key={index} className="flex items-center">
                                            <FiCheckCircle className="text-[#00e6bb] mr-2"/>
                                            <span>{item}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                        {/* ECO FRIENDLY FEATURES */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4 text-[#1e90ff] flex items-center"><MdEco className="mr-2" />Eco-Friendly Features</h2>
                            <div className="grid gap-4">
                                {
                                    adventure.ecoFriendlyFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-center">
                                            <FiCheckCircle className="text-[#90f489] mr-2"/>
                                            <span>{feature}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                        {/* SPECIAL INSTRUCTIONS */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4 text-[#1e90ff]">Special Instructions</h2>
                            <div className="grid gap-4">
                                {
                                    adventure.specialInstructions.map((instruction, index) => (
                                        <div key={index} className="flex items-center">
                                            <FiAlertTriangle className="text-[#f9f871] mr-2"/>
                                            <span>{instruction}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>


                    {/* RIGHT COLUMN - BOOKING */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center text-2xl font-bold text-[#1e90ff]"><FiDollarSign className="mr-1" />{adventure.cost}</div>
                                <span className="text-gray-600">per person</span>
                            </div>
                            <div className="space-y-4">
                                <button onClick={() => setShowBookingModal(true)} className="w-full bg-gradient-to-r from-[#1e90ff] to-[#00b5ff] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#00b5ff] hover:to-[#00d1ee] transition-all duration-300">Book Now</button>
                                <button onClick={handleConsultation} className="w-full bg-white border-2 border-[#1e90ff] text-[#1e90ff] py-3 px-6 rounded-lg font-semibold hover:bg-[#1e90ff] hover:text-white transition-all duration-300">Request Expert Consultation</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* BOOKING CONFIRMATION MODAL */}
            {
                showBookingModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
                            <button onClick={() => setShowBookingModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"><FiX size={24}/></button>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#90f489] rounded-full flex items-center justify-center mx-auto mb-4"> <FiCheckCircle size={32} className="text-white"/></div>
                                <h3 className="text-2xl font-bold text-[#1e90ff] mb-2">Congratulations!</h3>
                                <p className="text-gray-600 mb-6">You have successfully booked the {adventure.title} adventure. Get ready for an amazing experience!</p>
                                <button onClick={() => setShowBookingModal(false)} className="bg-[#1e90ff] text-white py-2 px-6 rounded-lg hover:bg-[#00b5ff] transition-colors">Close</button>
                            </div>
                        </div>
                    </div>
                )
            }


            {/* CONSULTATION HOURS MODAL */}
            {
                showConsultationModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
                            <button onClick={() => setShowConsultationModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"><FiX size={24}/></button>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#1e90ff] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FiCalendar size={32} className="text-white"/>
                                </div>
                                <h3 className="text-2xl font-bold text-[#1e90ff] mb-2">Consultation Hours</h3>
                                <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                                    <FiVideo/>
                                    <span>Live consultation available:</span>
                                </div>
                                <p className="text-lg font-semibold text-gray-800 mb-6">10:00 AM - 8:00 PM</p>
                                <button onClick={() => setShowConsultationModal(false)} className="bg-[#1e90ff] text-white py-2 px-6 rounded-lg hover:bg-[#00b5ff] transition-colors">Close</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
}


FeatureAdventureDetails.propTypes = {
    adventure: PropTypes.object,
}


export default FeatureAdventureDetails;
