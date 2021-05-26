import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { logoutAsync } from '../../redux/slices/user.slice';
import { Link } from 'react-router-dom';
import './UserSettings.scss';

const UserSettings = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);

    return(
        <div className="settings-container">
            <div className="settings__container-text">
                <h1 className="settings__container-title">Configuraciones de Usuario</h1>
            </div>
            <div className="recommender1__button">
                <Link to="/filter-providers" className="btn-blue">
                    Suscripciones
                </Link>
            </div>
            <div className="settings__logout">
                {user &&(
                    <div>
                        <button className="btn-blue" onClick={() => dispatch(logoutAsync(user.email))}>Cerrar Sesión</button>
                    </div>
                )}
                {/*  <span className="nav__text">
                Hasta pronto, {user.user.username}!
                </span> */}
            </div>
        </div>
    );
};

export default UserSettings;