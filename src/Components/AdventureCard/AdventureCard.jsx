import PropTypes from "prop-types";
import {FaLeaf} from "react-icons/fa";
import {Link} from "react-router-dom";


const AdventureCard = ({adventure}) => {

    return (
        <div className="flex-none w-72 mr-8 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={adventure.image} alt={adventure.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1e90ff] mb-4 truncate">{adventure.title}</h3>
                <ul className="mb-4">
                    {
                        adventure.ecoFriendlyFeatures.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600 mb-2 truncate">
                                <FaLeaf className="text-[#90f489] mr-2"/>
                                {feature}
                            </li>
                        ))
                    }
                </ul>
                <Link to={`/features/adventures/${adventure.id}/details`} className="block w-full bg-[#00b5ff] text-white text-center font-semibold py-2 px-4 rounded hover:bg-[#1e90ff] transition duration-300">Explore Now</Link>
            </div>
        </div>
    );
};


AdventureCard.propTypes = {
    adventure: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
        ecoFriendlyFeatures: PropTypes.arrayOf(PropTypes.string),
    }),
}


export default AdventureCard;
