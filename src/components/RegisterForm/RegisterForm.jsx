import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAsync } from '../../redux/slices/user.slice';
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

    return (
        <div className="shadow p-3 mb-5 bg-body rounded login-container">
            <h2>¡Únete a la comunidad!</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="row mb-3">
                    <label htmlFor="username" className="col-sm-2 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="username"
                            onChange={handleInputChange}
                            value={formData.email}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            onChange={handleInputChange}
                            value={formData.email}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        htmlFor="password"
                        className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            onChange={handleInputChange}
                            value={formData.password}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
