import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillHeart } from 'react-icons/ai';
import { MdEventSeat, MdLocalMovies } from 'react-icons/md';
import { IoNewspaperSharp } from 'react-icons/io5';

import './NavbarBottom.scss';

const NavbarBottom = () => {
    return (
        <>
            <navBar className="navbar-bottom background-blue">
                <Link className="navbar-bottom__icons-i" to="/registro-iniciar-sesion"><AiFillHome /></Link>
                <Link className="navbar-bottom__icons-i" to="/registro-iniciar-sesion"><MdLocalMovies /></Link>
                <Link className="navbar-bottom__icons-i" to="/registro-iniciar-sesion"><MdEventSeat /></Link>
                <Link className="navbar-bottom__icons-i" to="/registro-iniciar-sesion"><AiFillHeart /></Link>
                <Link className="navbar-bottom__icons-i" to="/registro-iniciar-sesion"><IoNewspaperSharp /></Link>
            </navBar>
        </>
    );
};

export default NavbarBottom;
