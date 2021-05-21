import React from 'react';
import { Loading} from './components';
import {RecommenderPage, WelcomePage} from './page';
import './App.scss';

function App() {
    return (
        <div className="app">
            <Loading />
            <WelcomePage />
            <RecommenderPage />
        </div>
    );
}

export default App;
