import './AdventureExperiences.css';
import AdventureCard from "../AdventureCard/AdventureCard.jsx";
import {useLoaderData} from "react-router-dom";


const AdventureExperiences = () => {

    const adventures = useLoaderData();
    // console.log(adventures);

    return (
        <section className="py-16 bg-gradient-to-r from-[#1e90ff] to-[#00e6bb]">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Adventure Experiences</h2>
                <div className="text-center mb-12">
                    <p className="text-xl text-[#f9f871]">Discover Thrills in Every Terrain. From Peaks to Depths, Adventure Awaits!</p>
                </div>
                <div className="overflow-hidden">
                    <div className="flex animate-scroll">
                        {
                            adventures.map((adventure, index) => (
                                <AdventureCard key={index} adventure={adventure}></AdventureCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdventureExperiences;
