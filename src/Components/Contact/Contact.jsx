import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import {APIProvider, Map} from '@vis.gl/react-google-maps';


const Contact = () => {


    const [formStatus, setFormStatus] = useState('idle');


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulate form submission
        setTimeout(() => {
            setFormStatus('sent');
            // Reset form fields here if needed
        }, 2000);
    };


    return (
        <div className="min-h-[calc(100vh-220px-377px)] bg-gradient-to-r from-[#1e90ff] to-[#00e6bb] flex items-center justify-center pb-10">
            <div className="bg-white/20 rounded-xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">

                {/* CONTACT FORM */}
                <div className="w-full md:w-3/5 p-8">

                    <h2 className="text-3xl font-bold text-white mb-6 animate__animated animate__fadeInUp">Get in Touch</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff]"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff]"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"></label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="4"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b5ff]"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors duration-300 
                            ${formStatus === 'idle' ? 'bg-[#00d1ee] hover:bg-[#00b5ff]' : formStatus === 'sending' ? 'bg-[#90f489] cursor-wait' : 'bg-[#00e6bb] cursor-default'}`}>
                            {formStatus === 'idle' && (<><FiSend className="inline-block mr-2"/>Send Message</>)}
                            {formStatus === 'sending' && 'Sending...'}
                            {formStatus === 'sent' && (<><FiCheck className="inline-block mr-2"/>Message Sent</>)}
                        </button>

                    </form>

                </div>

                {/* CONTACT INFORMATION */}
                <div className="w-full md:w-2/5 bg-gradient-to-br from-[#00b5ff] to-[#00e6bb] p-8 text-white">

                    <h3 className="text-2xl font-bold mb-6 animate__animated animate__fadeInUp">Contact Information</h3>

                    <div className="space-y-4">

                        <div className="flex items-center">
                            <FiMail className="text-[#f9f871] mr-4 text-xl" />
                            <span>info@eco-adventure.com</span>
                        </div>

                        <div className="flex items-center">
                            <FiPhone className="text-[#f9f871] mr-4 text-xl" />
                            <span>+49 176 7325 1642</span>
                        </div>

                        <div className="flex items-center">
                            <FiMapPin className="text-[#f9f871] mr-4 text-xl" />
                            <span>Heddernheimer Landstraße 41, <br/> 60439 Frankfurt am Main</span>
                        </div>

                    </div>

                    <div className="mt-8">

                        <h4 className="text-xl font-semibold mb-4">Our Location</h4>

                        <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
                            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                                <Map
                                    style={{width: '100vw', height: '100vh'}}
                                    defaultCenter={{lat: 50.16036213019965, lng: 8.646874594561423}}
                                    defaultZoom={17}
                                    gestureHandling={'greedy'}
                                    disableDefaultUI={true}
                                    className={'w-full h-full object-cover'}
                                />
                            </APIProvider>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Contact;
