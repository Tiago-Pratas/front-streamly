import React from 'react';
import { WelcomePage, RecommenderPage, Auth } from './pages/index';
import { Loading } from './components/index';
import './App.scss';

function App() {
    return (
        <div className="app">
            <Loading />
            <Auth />
            <WelcomePage />
            <RecommenderPage />
        </div>
    );
}

export default App;
