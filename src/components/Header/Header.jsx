import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/">Inicio</Link>
                <Link to="/recomendador">Recomendador</Link>
                <Link to="/favoritos">Favoritos</Link>
                <Link to="/blog">Blog</Link>
                <Link to="registro-iniciar-sesion">Registro / Login</Link>
            </nav>
        </header>
    );
};

export default Header;