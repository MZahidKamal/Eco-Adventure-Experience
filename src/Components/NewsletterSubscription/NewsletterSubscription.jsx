import {useState} from 'react';
import {FaPaperPlane} from 'react-icons/fa';


const NewsletterSubscription = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Subscribing email:', email);
        setEmail('');
    };

    return (
        <section className="py-16 bg-gradient-to-r from-[#1e90ff] to-[#00e6bb]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-lg text-[#f9f871] mb-8">Stay updated with our latest eco-adventures and exclusive offers!</p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center">
                        <div className="relative w-full sm:w-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full sm:w-80 px-6 py-3 rounded-l-full sm:rounded-r-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00b5ff]"/>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 sm:mt-0 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#00b5ff] to-[#00d1ee] text-white font-semibold rounded-full sm:rounded-l-none hover:from-[#1e90ff] hover:to-[#00b5ff] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f9f871]">
                            <span className="flex items-center justify-center">Subscribe<FaPaperPlane className="ml-2"/></span>
                        </button>
                    </form>

                    <p className="text-sm text-white mt-4">We respect your privacy. Unsubscribe at any time.</p>

                </div>
            </div>
        </section>
    );
};

export default NewsletterSubscription;
