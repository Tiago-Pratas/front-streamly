import React from 'react';
import { Loading} from './components';
import {Wellcome} from './page';
import './App.scss';

function App() {
    return (
        <div className="app">
            <Loading />
            <Wellcome />
        </div>
    );
}

export default App;
