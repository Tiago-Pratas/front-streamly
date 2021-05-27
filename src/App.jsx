import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { Loading, Header, NavbarBottom, UserSettings, SecureRoute } from './components';
=======
import { Loading, Header, NavbarBottom} from './components';
>>>>>>> filter-logic
import {
    WelcomePage,
    WelcomePage2,
    Home,
    Auth,
    RecommenderPage,
    Recommender1Page,
    Recommender2Page,
    Recommender3Page,
    Details,
    FilterProviders,
} from './pages';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
    getAllProviders,
    getAllTvShows,
    getAllMovies,
    getAllGenres,
} from './redux/slices/data.slice';
import { checkSessionAsync } from './redux/slices/user.slice';

import './App.scss';

function App() {
    const dispatch = useDispatch();

    const filteredProviders = useSelector((state) => state.tmdb.topFilter);

    dispatch(getAllProviders());
    dispatch(getAllGenres());
    dispatch(getAllTvShows(filteredProviders));
    dispatch(getAllMovies(filteredProviders));


    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        dispatch(checkSessionAsync());
    };

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
                        <Route exact path="/bienvenida-step2">
                            <WelcomePage2 />
                        </Route>
                        <Route path="/registro-iniciar-sesion">
                            <Auth />
                        </Route>
<<<<<<< HEAD
                        <SecureRoute
                            exact
                            path="/user-settings">
                            <UserSettings />
                        </SecureRoute>
                        <SecureRoute
                            exact
                            path="/recommender">
=======
                        <Route path="/recommender">
>>>>>>> filter-logic
                            <RecommenderPage />
                        </SecureRoute>
                        <SecureRoute
                            exact
                            path="/recommender1">
                            <Recommender1Page />
                        </SecureRoute>
                        <SecureRoute
                            exact
                            path="/recommender2">
                            <Recommender2Page />
                        </SecureRoute>
                        <SecureRoute
                            exact
                            path="/recommender3">
                            <Recommender3Page />
                        </SecureRoute>
                        <SecureRoute path="/details/:format/:id">
                            <Details />
                        </SecureRoute>
                        <SecureRoute
                            exact
                            path="/filter-providers">
                            <FilterProviders />
                        </SecureRoute>
                    </Switch>
                </main>
                <div className="navbar">
                    <NavbarBottom />
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
