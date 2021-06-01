import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit'
import { useHistory } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';
import { loginAsync } from '../../redux/slices/user.slice';
import './LoginForm.scss';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
};

const LoginForm = () => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch();
    const history = useHistory();
    let { error, hasUser } = useSelector((state) => state.user);
    if (error === 'Request failed with status code 401' || error === 'Network Error') error = '';

    console.log(hasUser);
    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        dispatch(loginAsync(formData))
            .then(unwrapResult)
            .then(res => {
                if(!res.error) {
                    history.push('/');
                } else {
                    setFormData(INITIAL_STATE);
                }
            });
    };

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="shadow p-3 mb-5 bg-body rounded login-container">
            <BiLogIn className="login-icon"/>
            <form onSubmit={handleFormSubmit}>

                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    onChange={handleInputChange}
                    value={formData.email}
                />

                <label htmlFor="email" className="col-sm-2 col-form-label">
                    Email
                </label>

                <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    onChange={handleInputChange}
                    value={formData.password}
                />

                <div>
                    <label
                        htmlFor="password"
                        className="col-sm-2 col-form-label"
                    >
                        Contraseña
                    </label>
                </div>

                <button type="submit" className="btn btn-primary btn-blue">
                    Iniciar Sesión
                </button>
            </form>
            <div className='error-container'>
                {error && (
                    <div className="error-container__text">
                        <h3>{error}</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginForm;
