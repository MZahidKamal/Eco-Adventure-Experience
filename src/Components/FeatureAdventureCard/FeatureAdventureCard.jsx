import PropTypes from "prop-types";
import {FiChevronRight, FiClock, FiMap} from "react-icons/fi";
import {Link} from "react-router-dom";
import {useEffect} from "react";


const FeatureAdventureCard = ({adventure}) => {


    /* SCROLL TO THE TOP OF THE PAGE WHEN THE COMPONENT LOADS. */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div key={adventure.id} className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">

            <div className="relative">
                <img src={adventure.image} alt='adventure_image' className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className={`absolute top-4 right-4 bg-[#1e90ff] text-white text-xs font-bold py-1 px-2 rounded-full`}>{adventure.category}</div>
            </div>

            <div className="p-6">

                <h3 className="text-xl font-bold mb-2 group-hover:text-[#1e90ff] transition-colors duration-300">{adventure.title}</h3>

                <div className="flex items-center text-gray-600 mb-2">
                    <FiMap className="mr-2"/>
                    <span>{adventure.location}</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-gray-700">
                        <span className="font-semibold">${adventure.cost}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <FiClock className="mr-1"/>
                        <span>{adventure.duration}</span>
                    </div>
                </div>

                <Link
                    to={`/features/adventures/${adventure.id}/details`}
                    className="w-full bg-[#00d1ee] text-white py-2 px-4 rounded-full flex items-center justify-center hover:bg-[#00b5ff] transition-colors duration-300">
                    View Details
                    <FiChevronRight className="ml-2"/>
                </Link>

            </div>

        </div>
    );
};


FeatureAdventureCard.propTypes = {
    adventure: PropTypes.object,
}


export default FeatureAdventureCard;
