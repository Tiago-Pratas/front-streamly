import React from 'react';
import { Auth } from './Pages/index';
import { Loading } from './components/index';
import {RecommenderPage, WellcomePage} from './page';
import './App.scss';

function App() {
    return (
        <div className="app">
            <Loading />
            <Auth />
            <WellcomePage />
            <RecommenderPage />
        </div>
    );
}

export default App;
