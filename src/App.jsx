import React from 'react';
import { LoginForm } from './Pages';
import { RegisterForm } from './components/index';
import './App.scss';

function App() {
    return (
        <div className="app">
            <LoginForm/>
            <RegisterForm />
        </div>
    );
}

export default App;
