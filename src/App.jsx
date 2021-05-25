import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, Header, NavbarBottom } from './components';
import { WelcomePage, WelcomePage2, Home, Auth, RecommenderPage, Recommender1Page, Recommender2Page, Details, FilterProviders } from './pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getAllProviders, getAllTvShows, getAllMovies } from './redux/slices/data.slice';
import { checkSessionAsync } from './redux/slices/user.slice';

import './App.scss';


function App() {

    const dispatch = useDispatch();
    const filteredProviders = useSelector(state => state.tmdb.topFilter);
    const getProviders = dispatch(getAllProviders());
    const tvShows = dispatch(getAllTvShows(filteredProviders));
    const movies = dispatch(getAllMovies(filteredProviders));
    console.log('tv', filteredProviders);
    console.log(tvShows, 'movies2', movies);
    console.log(getProviders);

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
                        <Route path="/recommender">
                            <RecommenderPage />
                        </Route>
                        <Route path="/recommender1">
                            <Recommender1Page />
                        </Route>
                        <Route path="/recommender2">
                            <Recommender2Page />
                        </Route>
                        <Route path="/details">
                            <Details />
                        </Route>
                        <Route path="/filter-providers">
                            <FilterProviders />
                        </Route>
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
