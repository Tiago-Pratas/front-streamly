import React from 'react';
import { useSelector } from 'react-redux';
import { sendProviders } from '../../api/api';
import './FilterProviders.scss';

const FilterProviders = () => {
    const providers = useSelector(state => state.tmdb.providers);
    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    const allProviders = [...providers];

    const setProviders = (ev) => {
        sendProviders(ev.provider_id);
    };

    return (
        <div className="suscription">
            <h1 className="suscription__title">Selecciona tus suscripciones</h1>
            {
                allProviders.map((provider) => (
                    <img 
                        src={`${imgUrl}${provider.logo_path}`} 
                        key={provider.provider_id} 
                        alt="img-providers" 
                        className="suscription__img"
                        onClick={() => (setProviders)}
                    />
                ))
            }
        </div>
    );
};
 
export default FilterProviders;