import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import './Header.scss';

const Header = () => {

    return (
        <>
            <header className="header background-blue">
                <Link className="header__logo" to="/">Streamly</Link>

                <nav className="header__nav">
                    <Link className="header__nav-link" to="/recommender">Recomendador</Link>
                    <Link className="header__nav-link" to="/favorites">Favoritos</Link>
                    <Link className="header__nav-link" to="/blog">Blog</Link>
                </nav>

                <div className="header__icons">
                    <Link className="header__icons-i" to="/registro-iniciar-sesion"><AiOutlineUser /></Link>
                    <AiOutlineSearch className="header__icons-i" />
                    <Link className="header__icons-i" to="/user-settings"><FiSettings /></Link>
                </div>
            </header>
        </>
    );
};

export default Header;