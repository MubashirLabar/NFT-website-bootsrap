import { Switch, BrowserRouter, Route } from 'react-router-dom';

// Views
import LandingView from './views/landing-view';
import HomeView from './views/home-view';
import SearchView from './views/search-view';
import CollectionView from './views/collection-view';
import FavoritesView from './views/favorites-view';

// Import scss
import './assets/scss/theme.scss';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LandingView />
                </Route>

                <Route exact path="/home">
                    <HomeView />
                </Route>

                <Route exact path="/search">
                    <SearchView />
                </Route>

                <Route exact path="/favorites">
                    <FavoritesView />
                </Route>

                <Route exact path="/collections/:name">
                    <CollectionView />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
