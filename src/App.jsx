import React from 'react';
import { Loading} from './components';
import {Recommender, /* Wellcome */} from './page';
import './App.scss';

function App() {
    return (
        <div className="app">
            <Loading />
            {/* <Wellcome /> */}
            <Recommender />
        </div>
    );
}

export default App;
