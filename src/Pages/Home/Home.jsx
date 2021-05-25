import React from 'react';
import { Carousel } from '../../components';
import { TopFilter } from '../../components';

const Home = () => {
    const setupSwiper = [
        {
            title: 'Novedades',
            date: '2021/01/01',
            genre: '',
        },
        {
            title: 'Comedias',
            release_date: '',
            genre: '35',
        },
        {
            title: 'Acción',
            release_date: '',
            genre: '28',
        },
        {
            title: 'Animación',
            release_date: '',
            genre: '16',
        },
        {
            title: 'Terror',
            release_date: '',
            genre: '27',
        },
    ];

    return (
        <>
            <div>
                <TopFilter />
            </div>
            <div>
                {setupSwiper.map((setup) => (
                    <Carousel
                        title={setup.title}
                        date={setup.date}
                        genre={setup.genre}
                        key={setup.title}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;
