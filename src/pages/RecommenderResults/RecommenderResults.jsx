import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { recommenderAsync } from '../../redux/slices/data.slice';
import './RecommenderResults.scss';

const recommenderResults = () => {
    const { tvOrMovie, runtime, genre, year } = useSelector((state) => state.recommender);
    const recommendations = useSelector((state) => state.tmdb.recommenderResults);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(recommenderAsync(tvOrMovie, runtime, genre, year));
    }, []);

    let randomId =
        recommendations[Math.floor(Math.random() * recommendations.length)];
    
    return (
        <div className="recommendation-container" >
            <Link
                className="btn-blue"
                to={`/details/${tvOrMovie}/${randomId?.id}`}
            >
                Aqui lo tienes
            </Link>
        </div>
    );
};

export default recommenderResults;
