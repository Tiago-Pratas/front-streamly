import React from 'react';
import EnConstruccion from '../../img/EnConstruccion.png';
import './BuildingPage.scss';


const BuildingPage = () => {
    return(
        <div className="building-container">
            <div>
                <h1 className="building__container-title">Página en Construcción...</h1>
            </div>
            <div>
                <img src={EnConstruccion} alt="imagen constructor"></img>
            </div>
        </div>
    );
};

export default BuildingPage;