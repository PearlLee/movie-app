import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/gnb.scss';

function Navigation() {
    return (
        <header className="gnb">
            <h1>Movie App</h1>
            <menu>
            <li><Link to="/" className="button">Movie List</Link></li>
            <li><Link to="/about" className="button">About</Link></li>
            </menu>
        </header>
    );
}

export default Navigation;