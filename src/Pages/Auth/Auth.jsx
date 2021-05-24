import React, { useState } from 'react';
import { RegisterForm, LoginForm } from '../../components/index';

const Auth = () => {
    const [showForm, setShowForm] = useState('login');

    return (
        <>
            <h2>¡Únete a la comunidad!</h2>
            <div className="wrapper">
                {showForm === 'login' && <LoginForm />}

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
