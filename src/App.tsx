import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import GNB from './components/Navigation';
import About from './routes/About';
import MovieList from './routes/MovieList';
import Detail from './routes/Detail';

function App() {
    return (
        <HashRouter>
            <GNB />
            <Route path="/" exact={true} component={MovieList} />
            <Route path="/about" component={About} />
            <Route path="/movie-detail" component={Detail} />
        </HashRouter>
    );
}

export default App;