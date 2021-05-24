import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAsync } from '../../redux/slices/user.slice';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import './RegisterForm.scss';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
};

const RegisterForm = () => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        dispatch(registerAsync(formData));
        setFormData(INITIAL_STATE);
    };

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setFormData({ ...formData, [name]: value });
    };

    //TODO: error messages below input
    return (
        <div className="shadow p-3 mb-5 bg-body rounded login-container">
            <AiOutlineUsergroupAdd className="login-icon"/>
            <form className="form" onSubmit={handleFormSubmit}>
                
                <input
                    type="text"
                    name="username"
                    className="form-control input"
                    id="username"
                    onChange={handleInputChange}
                    value={formData.username}
                />

                <label htmlFor="username" className="col-sm-2 col-form-label">
                    Usuario
                </label>

                <input
                    type="email"
                    name="email"
                    className="form-control input"
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
                    className="form-control input"
                    id="password"
                    onChange={handleInputChange}
                    value={formData.password}
                />

                <div>
                    <label
                        htmlFor="password"
                        className="col-sm-2 col-form-label">
                        Contraseña
                    </label>
                </div>

                <button type="submit" className="btn btn-primary btn-blue">
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
