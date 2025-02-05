import { FaMapMarkedAlt, FaClipboardList, FaCalendarAlt, FaComments } from 'react-icons/fa';


const WhyChooseUs = () => {


    const steps = [
        {
            icon: <FaMapMarkedAlt className="text-4xl text-[#1e90ff]" />,
            title: "Choose Your Adventure",
            description: "Select from our diverse range of eco-friendly adventures based on category, description, cost, and availability."
        },
        {
            icon: <FaClipboardList className="text-4xl text-[#00b5ff]" />,
            title: "Review Details",
            description: "Check the duration, group size, and special instructions for your chosen adventure."
        },
        {
            icon: <FaCalendarAlt className="text-4xl text-[#00d1ee]" />,
            title: "Book Your Date",
            description: "Select your preferred date and complete the booking process."
        },
        {
            icon: <FaComments className="text-4xl text-[#00e6bb]" />,
            title: "Expert Consultation",
            description: "If needed, arrange a consultation with our eco-adventure experts for personalized advice."
        }
    ];


    return (
        <section id={'how-we-work'} className="py-16 bg-gradient-to-b from-white to-[#f9f871]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e90ff] text-center mb-8">Why Choose Us</h2>
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <p className="text-xl text-gray-700">We offer unforgettable eco-adventures that prioritize
                        sustainability and environmental conservation. Our expert-led experiences ensure your safety
                        while providing unique insights into the worlds most beautiful ecosystems.</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e90ff] text-center mt-16 mb-10">How We Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        steps.map((step, index) => (
                            <div key={index}
                                 className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
                                <div className="flex flex-col items-center">
                                    <div className="mb-4">{step.icon}</div>
                                    <h3 className="text-xl font-semibold text-[#1e90ff] mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-center">{step.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold text-[#1e90ff] mb-4">Ready for Your Eco-Adventure?</h3>
                    <button
                        className="bg-[#00b5ff] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#1e90ff] transition duration-300 transform hover:scale-105">
                        Start Planning Now
                    </button>
                </div>
            </div>
        </section>
    );
};


export default WhyChooseUs;
