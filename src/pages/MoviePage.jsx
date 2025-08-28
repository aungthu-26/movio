import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Spinner from '../components/Spinner';

const MoviePage = () => {
    const { id } = useParams();

    const API_BASE_URL = 'https://api.themoviedb.org/3';
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const [movie, setMovie] = useState(null);


    const API_OPTIONS = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS)
            .then(res => res.json())
            .then(res => setMovie(res))
            .catch(err => console.error(err));
    }, [id]);

    if (!movie) {
        return <Spinner />
    }

    return (
        <div className='text-white'>MoviePage</div>
    )
}

export default MoviePage