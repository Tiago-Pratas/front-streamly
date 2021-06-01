import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logoutAsync } from '../../redux/slices/user.slice';
import './UserSettings.scss';

const UserSettings = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    const history = useHistory();
    console.log(history);

    const logout = () => {
        dispatch(logoutAsync(user.email))
            .then(() => {
                history.push('/registro-iniciar-sesion');
            });
    };

    return(
        <div className="settings-container">
            <div>
                <h1 className="settings__container-title">Configuraciones de Usuario</h1>
            </div>
            <div className="recommender1__button">
                <Link to="/filter-providers" className="btn-blue">
                    Suscripciones
                </Link>
            </div>
            <div className="settings__logout">
                <div>
                    <button className="btn-blue" onClick={() => logout()}>Cerrar Sesión</button>
                </div>
            </div>
        </div>
    );
};

export default UserSettings;