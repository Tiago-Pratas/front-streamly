import React from 'react';
import { Auth } from './Pages/index';
import { Loading } from './components/index';
import './App.scss';

function App() {
    return (
        <div className="app">
            <Loading />
            <Auth />
        </div>
    );
}

export default App;
