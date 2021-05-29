import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecommendation } from '../../api/tmdb';

const recommenderResults = () => {
    const { tvOrMovie, runtime, genre, year } = useSelector((state) => state.recommender);
    const [recommendations, setRecommendations] = useState('');

    console.log(tvOrMovie, runtime, genre, year);

    useEffect(() => {
        const poop = getRecommendation(tvOrMovie, runtime, genre, year)
            .then(data => setRecommendations(data));
        console.log(poop);

    }, []);

    let randomId = recommendations[Math.floor(Math.random() * recommendations.length)];

    console.log(randomId);
    
    return (
        <Link
            
            className="btn-blue"
            to={`/details/${tvOrMovie}/${randomId?.id}`}
        >
            Aqui lo tienes
        </Link>
    );
};

export default recommenderResults;
