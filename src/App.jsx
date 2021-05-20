import React from 'react';
import { Loading} from './components';
import {RecommenderPage, WellcomePage} from './page';
import './App.scss';

function App() {
    return (
        <div className="app">
            <Loading />
            <WellcomePage />
            <RecommenderPage />
        </div>
    );
}

export default App;
