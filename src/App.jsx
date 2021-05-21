import React from 'react';

import { Loading, Header } from './components';
import { WelcomePage, RecommenderPage, Home, Auth } from './Pages';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';

function App() {
    return (
        <>
            <BrowserRouter>
                <Loading />
                <Header />
                <main>
                    <Route path="/" exact={true}>
                        <Home />
                    </Route>
                    {/* Esta ruta no está en el menú, porque es la página de bienvenida */}
                    <Route path="/bienvenida">
                        <WelcomePage />
                    </Route>
                    {/* Esta ruta no está en el menú, porque es la página de bienvenida */}
                    <Route path="/bienvenido-recomendador">
                        <RecommenderPage />
                    </Route>
                    <Route path="/registro-iniciar-sesion">
                        <Auth />
                    </Route>
                </main>
            </BrowserRouter>
        </>

    );
}

export default App;
