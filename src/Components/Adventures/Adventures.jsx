import { useState } from 'react';
import FeatureAdventureCard from "../FeatureAdventureCard/FeatureAdventureCard.jsx";
import {useLoaderData} from "react-router-dom";


const Adventures = () => {


    const adventures = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState('All');


    /* CREATING THE CATEGORY LIST */
    const categories = ['All', ...new Set(adventures.map(a => a.category))];


    /* FILTERING THE ADVENTURES BASED ON CATEGORY */
    const filteredAdventures = selectedCategory === 'All' ? adventures : adventures.filter(a => a.category === selectedCategory);


    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <h1 className="text-5xl font-bold text-center text-[#1e90ff] mb-12 animate__animated animate__fadeInUp">Discover Your Next Adventure</h1>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {
                        categories.map((category, index) => {
                            return <button
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${selectedCategory === category ? 'bg-[#1e90ff] text-white' : 'bg-white text-[#1e90ff] hover:bg-[#1e90ff] hover:text-white'}`}>
                                {category}
                            </button>
                        })
                    }
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        filteredAdventures.map((adventure, index) => {
                            return <FeatureAdventureCard key={index} adventure={adventure}></FeatureAdventureCard>
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default Adventures;
