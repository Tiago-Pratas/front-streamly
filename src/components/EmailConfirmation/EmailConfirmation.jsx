import React from 'react';
import popcorn from '../../img/popcorn.png';

const EmailConfirmation = (props) => {
    
    console.log(props.confirmation);
    return(
        <div className="building-container">
            <div>
                <h1 className="building__container-title"> Hola {props.confirmation}, gracias por registrarte en Streamly</h1>
            </div>
            <div>
                <img src={popcorn} alt="imagen constructor"></img>
            </div>
        </div>
    );
};

export default EmailConfirmation ;