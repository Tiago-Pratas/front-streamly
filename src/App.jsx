import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
    getAllProviders,
    getAllTvShows,
    getAllMovies,
    getAllGenres,
} from './redux/slices/data.slice';
import { checkSessionAsync } from './redux/slices/user.slice';
import {
    Loading,
    Header,
    NavbarBottom,
    UserSettings,
    SecureRoute,
    FindMovie,
} from './components';
import {
    WelcomePage,
    WelcomePage2,
    Home,
    Auth,
    Recommender0Page,
    Recommender1Page,
    Recommender2Page,
    Recommender3Page,
    Details,
    FilterProviders,
    BuildingPage,
    UserVerify,
    RecommenderResults,
    FavoritesPage
} from './pages';

import './App.scss';

const App = () => {
    const dispatch = useDispatch();

    const filteredProviders = useSelector((state) => state.tmdb.topFilter);
    
    useEffect(() => {
        getUser();

        dispatch(getAllProviders());
        dispatch(getAllGenres());
        dispatch(getAllTvShows(filteredProviders));
        dispatch(getAllMovies(filteredProviders));
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
                        <Route path="/bienvenida-step1" component={WelcomePage} />
                        {/* Esta ruta no está en el menú, porque es la página de bienvenida */}
                        <Route exact path="/bienvenida-step2">
                            <WelcomePage2 />
                        </Route>
                        <Route path="/registro-iniciar-sesion">
                            <Auth />
                        </Route>
                        <Route path="/user/:email/:token" component={UserVerify} />
                        <SecureRoute exact path="/user-settings">
                            <UserSettings />
                        </SecureRoute>
                        <SecureRoute exact path="/recommender">
                            <Recommender0Page />
                        </SecureRoute>
                        <SecureRoute exact path="/recommender1">
                            <Recommender1Page />
                        </SecureRoute>
                        <SecureRoute exact path="/recommender2">
                            <Recommender2Page />
                        </SecureRoute>
                        <SecureRoute exact path="/recommender3">
                            <Recommender3Page />
                        </SecureRoute>
                        <SecureRoute exact path="/recommender-results">
                            <RecommenderResults />
                        </SecureRoute>
                        <SecureRoute path="/details/:format/:id" component={Details} />
                        <SecureRoute exact path="/filter-providers">
                            <FilterProviders />
                        </SecureRoute>
                        <SecureRoute exact path="/find-movie">
                            <FindMovie />
                        </SecureRoute>
                        <SecureRoute exact path="/building">
                            <BuildingPage />
                        </SecureRoute>
                        <SecureRoute exact path="/favorites">
                            <FavoritesPage />
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
