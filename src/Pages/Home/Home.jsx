import React, { useState } from 'react';
import { AllMovies } from '../../components/';
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
        {
            title: 'Drama',
            release_date: '',
            genre: '18',
        },
        {
            title: 'Fantasía',
            release_date: '',
            genre: '14',
        },
        {
            title: 'Suspense',
            release_date: '',
            genre: '53',
        },
        {
            title: 'Aventura',
            release_date: '',
            genre: '53',
        },
    ];

    const [value, setValue] = useState('');

    const onchange = (data) => {
        setValue(data);

    };

    const [carouselView, setCarouselView] = useState(true);

    const handleView = () => {
        setCarouselView(!carouselView);
    };

    return (
        <>
            {
                carouselView ? (
                    <div>
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
                                    changeView={handleView}
                                    onchange={onchange}
                                />
                            ))}
                        </div>
                    </div>
                )
                    :
                    (<AllMovies
                        changeView={handleView}
                        value={value}
                    />)
            }
        </>
    );
};

export default Home;
