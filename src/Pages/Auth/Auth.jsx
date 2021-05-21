import React from 'react';
import {
    RegisterForm,
    LoginForm } from '../../components/index';

const Auth = () => {

    //TODO: create a switch that will show either component
    return (
        <>
            <LoginForm />
            <RegisterForm />
        </>
    );
};

export default Auth;