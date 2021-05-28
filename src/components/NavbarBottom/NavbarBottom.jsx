import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillHeart } from 'react-icons/ai';
import { MdEventSeat, MdLocalMovies } from 'react-icons/md';
import { IoNewspaperSharp } from 'react-icons/io5';

import './NavbarBottom.scss';

const NavbarBottom = () => {
    return (
        <>
            <nav className="navbar-bottom background-blue">
                <Link className="navbar-bottom__icons-i" to="/"><AiFillHome /></Link>
                <Link className="navbar-bottom__icons-i" to="/building"><MdLocalMovies /></Link>
                <Link className="navbar-bottom__icons-i" to="/recommender"><MdEventSeat /></Link>
                <Link className="navbar-bottom__icons-i" to="/building"><AiFillHeart /></Link>
                <Link className="navbar-bottom__icons-i" to="/building"><IoNewspaperSharp /></Link>
            </nav>
        </>
    );
};

export default NavbarBottom;
