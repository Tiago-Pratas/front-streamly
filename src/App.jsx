import React from 'react';

import { Loading, Header } from './components';
import { WelcomePage, RecommenderPage, Home, Auth } from './pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

function App() {
    return (
        <>
            <BrowserRouter>
                <Loading />
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact={true}>
                            <Home />
                        </Route>
                        {/* Esta ruta no está en el menú, porque es la página de bienvenida */}
                        <Route path="/bienvenida-step1">
                            <WelcomePage />
                        </Route>
                        {/* Esta ruta no está en el menú, porque es la página de bienvenida */}
                        <Route path="/bienvenido-step2">
                            <RecommenderPage />
                        </Route>
                        <Route path="/registro-iniciar-sesion">
                            <Auth />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </>

    );
}

export default App;
