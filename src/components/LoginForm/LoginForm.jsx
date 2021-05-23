import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../redux/slices/user.slice';
import { BsFillHouseFill } from 'react-icons/bs';
import './LoginForm.scss';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
};

const LoginForm = () => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        await dispatch(loginAsync(formData));
        setFormData(INITIAL_STATE);
    };

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="shadow p-3 mb-5 bg-body rounded login-container">
            <BsFillHouseFill className="login-icon"/>
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


        </div>
    );
};

export default LoginForm;
