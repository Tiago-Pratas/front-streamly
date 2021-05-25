import React from 'react';
import { Carousel } from '../../components';

const Home = () => {
    const setupSwiper = [
        {
            title: 'Novedades',
            date: '2021/01/01',
            genre: '',
            page: 1,
            sort_by: 'release_date.desc',
        },
        {
            title: 'Comedias',
            release_date: '',
            genre: '35',
            page: 1,
            sort_by: 'release_date.desc',
        },
    ];

    return (
        <div>
            {setupSwiper.map((setup) => (
                <Carousel title={setup.title} date={setup.date} genre={setup.genre}key={setup.title}/>
            ))}
        </div>
    );
};

export default Home;
