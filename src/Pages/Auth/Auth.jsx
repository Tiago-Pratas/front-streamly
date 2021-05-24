import React, { useState } from 'react';
import './Auth.scss';

import {
    RegisterForm,
    LoginForm } from '../../components/index';

const Auth = () => {
    const [showForm, setShowForm] = useState('login');

    return (
        <>
            <div className="form-container__controls">
                <button className="form-container__controls-btn btn-blue" onClick={() => setShowForm('login')}>Login</button>
                <button className="form-container__controls-btn btn-blue" onClick={() => setShowForm('register')}>Registro</button>
            </div>
            
            <div className="form-container">
                {showForm === 'login' && (
                    <LoginForm />
                )}

                {showForm === 'register' && <RegisterForm />}

                <div className="controls">
                    <button onClick={() => setShowForm('login')}>Login</button>
                    <button onClick={() => setShowForm('register')}>
                        Registro
                    </button>
                </div>
            </div>
        </>
    );
};

export default Auth;
