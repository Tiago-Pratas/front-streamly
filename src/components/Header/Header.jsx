import React from 'react';
import TopFilter from '../TopFilter/TopFilter';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import './Header.scss';

const Header = () => {

    return (
        <>
            <header className="header background-blue">
                <Link className="header__logo" to="/">Streamly</Link>

                <nav className="header__nav">
                    <Link className="header__nav-link" to="/recomendador">Recomendador</Link>
                    <Link className="header__nav-link" to="/favoritos">Favoritos</Link>
                    <Link className="header__nav-link" to="/blog">Blog</Link>
                </nav>

                <div className="header__icons">
                    <Link className="header__icons-i" to="/registro-iniciar-sesion"><AiOutlineUser /></Link>
                    <AiOutlineSearch className="header__icons-i" />
                </div>
            </header>
            <div>
                <TopFilter />
            </div>
        </>
    );
};

export default Header;