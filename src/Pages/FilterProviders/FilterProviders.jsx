import React from 'react';
import { useSelector } from 'react-redux';
import { sendProviders } from '../../api/api';
import { Link } from 'react-router-dom';
import './FilterProviders.scss';

const FilterProviders = () => {
    const providers = useSelector((state) => state.tmdb.providers);
    const user = useSelector((state) => state.user.user);
    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    const allProviders = [...providers];

    const setProviders = (id) => {
        sendProviders(user.email, id);
    };

    return (
        <>
            <div className="suscription">
                <h1 className="suscription__title">
                    Selecciona tus suscripciones
                </h1>
                {allProviders.map((provider) => (
                    <a className="suscription__link" key={provider.provider_id}>
                        <img
                            src={`${imgUrl}${provider.logo_path}`}
                            alt="img-providers"
                            className="suscription__img"
                            onClick={() => setProviders(provider.provider_id)}
                        />
                    </a>
                ))}
            </div>
            <div className="suscription">
                <Link to="/">
                    <button className="btn btn-primary btn-blue">Finalizar</button>
                </Link>
            </div>
        </>
    );
};

export default FilterProviders;
