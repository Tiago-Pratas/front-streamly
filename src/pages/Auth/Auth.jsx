import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {UserSettings} from '../../components';
import './Auth.scss';

import { RegisterForm, LoginForm } from '../../components/index';

const Auth = () => {
    const [showForm, setShowForm] = useState('login');
    const {hasUser} = useSelector(state => state.user);




    return (
        <>{
            !hasUser ? (
                <div>
                    <div className="form-container__controls">
                        <button
                            className="form-container__controls-btn btn-blue"
                            onClick={() => setShowForm('login')}
                        >
                            Login
                        </button>
                        <button
                            className="form-container__controls-btn btn-blue"
                            onClick={() => setShowForm('register')}
                        >
                            Registro
                        </button>
                    </div>

                    <div className="form-container">
                        {showForm === 'login' && <LoginForm />}

                        {showForm === 'register' && <RegisterForm />}
                    </div>
                </div>
            ): (
                <div>
                    <UserSettings/>
                </div>
            )
        }
        </>
    );
};

export default Auth;
