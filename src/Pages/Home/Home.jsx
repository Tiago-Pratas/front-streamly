import React from 'react';
import { Carousel } from '../../components';
import fclub from '../../img/fclub.jpeg';

const Home = () => {
    const image = fclub;
    return (
        <div>
            <h1>Página de inicio</h1>
            <Carousel  image={image}/>
        </div>
    );
};

export default Home;