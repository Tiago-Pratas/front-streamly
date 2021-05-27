import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {Loading} from '../../components';

const SecureRoute = (props) => {

    let {hasUser} = useSelector(state => state.user);

    if(hasUser === null) {
        //Aún no ha vuelto la petición
        return(<Loading />);
    }

    if(hasUser) {
        //tenemos usuario: true
        return(<Route {...props}/>);
    }

    if(!hasUser) {
        //no hay usuario logueado
        return(<Redirect to='/registro-iniciar-sesion'/>);
    }
};

export default SecureRoute;