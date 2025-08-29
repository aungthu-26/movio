import React from 'react';
import popularityImg from '../assets/images/popularity.svg';
import trailer from '../assets/images/trailer.png';
import poster from '../assets/images/poster.png';

const MovieDetails = () => {
    const movie = {
        title: "Squid Game 2",
        year: "2024",
        rating: "PG-13",
        duration: "2h 46m",
        vote_average: 8.9,
        votes: "200k",
        popularity: 1158.1178,
        genres: ["Adventure", "Action", "Drama"],
        overview: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes: a survival game that has a whopping 45.6 billion-won prize at stake.",
        releaseDate: "December 26, 2024 (Worldwide)",
        countries: "United States • Canada • UAE • Hungary • Italy • New Zealand",
        status: "Released",
        language: "English • Korean • Hindi • Arabic • German • Spanish",
        budget: "$21.4 million",
        revenue: "$900 Million",
        tagline: "45.6 Billion Won is Child's Play",
        productionCompanies: "Legendary Entertainment • Warner Bros. Entertainment • Villeneuve Films",
        posterLeft: poster,
        posterRight: trailer,
    };

    // const poster_base_url = "https://image.tmdb.org/t/p/w500/";

    return (
        <div className=" text-white min-h-screen py-20 px-8 lg:px-20 z-10 ">
            <div className="bg-[#0F0D23] rounded-2xl overflow-hidden max-w-7xl mx-auto box-shadow">
                {/* Header */}
                <div>
                    <div className="px-4 pt-4 lg:px-12 lg:pt-12 flex flex-col lg:flex-row justify-between items-start lg:items-center">
                        <div className="flex flex-col mb-6 lg:mb-0">
                            <div className="text-4xl lg:text-5xl font-bold mb-2">{movie.title}</div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="bg-[#221F3D] p-1.5 rounded-md flex items-center space-x-1">
                                <span className=" text-base font-semibold">{movie.vote_average.toFixed(1)}</span>
                                <span className="text-gray-400 text-sm">/10 ({movie.votes})</span>
                            </div>
                            <div className="bg-[#221F3D] p-1.5 rounded-md flex gap-2 hover:bg-gray-700 transition-colors">
                                <img src={popularityImg} alt="popularity" />
                                <span>{movie.popularity.toFixed(0)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 lg:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center">
                        <p className="text-gray-400 text-lg">{movie.year} • {movie.rating} • {movie.duration}</p>
                    </div>
                </div>

                {/* Posters and Trailer section */}
                <div className="px-4 lg:px-12 flex gap-5 mt-7">
                    <div className="relative ">
                        <img src={movie.posterLeft} alt={`${movie.title} Poster`} className="rounded-xl object-cover" />
                        <div className="absolute bottom-4 left-4">
                            <p className="text-xs text-white px-2 py-1 rounded-full font-semibold">LET THE NEW GAMES BEGIN</p>
                            <p className="text-xs text-gray-200 mt-1">ONLY ON <span className="font-bold">NETFLIX</span> | <span className="font-bold">DECEMBER 26</span></p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={movie.posterRight} alt={`${movie.title} Poster`} className="rounded-xl  object-cover" />
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 rounded-full p-2 flex items-center space-x-2 cursor-pointer hover:bg-opacity-90 transition-opacity">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3.224-2.224a1 1 0 000-1.616l-3.224-2.224z"></path></svg>
                            <span className="text-white text-sm">Trailer • 00:31</span>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 rounded-md px-2 py-1 flex items-center space-x-1">
                            <span className="text-white text-xs">A NETFLIX</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-12 pt-0 mt-5">



                    {/* Right Column - Details and Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <button className="bg-[#8A37E3] px-4 py-2 rounded-full font-medium text-sm">Genres</button>
                            {movie.genres.map(genre => (
                                <button key={genre} className="bg-gray-700 px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-600 transition-colors">{genre}</button>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-gray-400 text-sm mb-1">Overview</h3>
                                <p className="text-lg">{movie.overview}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                <div>
                                    <h3 className="text-gray-400 text-sm mb-1">Release date</h3>
                                    <p className="text-base">{movie.releaseDate}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm mb-1">Countries</h3>
                                    <p className="text-base">{movie.countries}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm mb-1">Status</h3>
                                    <p className="text-base">{movie.status}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm mb-1">Language</h3>
                                    <p className="text-base">{movie.language}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm mb-1">Budget</h3>
                                    <p className="text-base">{movie.budget}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm mb-1">Revenue</h3>
                                    <p className="text-base">{movie.revenue}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm mb-1">Tagline</h3>
                                    <p className="text-base">{movie.tagline}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm mb-1">Production Companies</h3>
                                    <p className="text-base">{movie.productionCompanies}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center md:text-left">
                            <button className="bg-[#8A37E3] hover:bg-[#7a2dd4] text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center space-x-2">
                                <span>Visit Homepage</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M12.95 6.45a.5.5 0 00-.7-.7l-5.6 5.6a.5.5 0 00.7.7l5.6-5.6zM13 10a3 3 0 100-6 3 3 0 000 6z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;