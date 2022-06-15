import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/qq.jpg';

import './Navbar.css';

export default function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg  navbar-dark  ">
        <div className='container-fluid'>
        <span className='navbar-brand'>
        <img src={Logo} width="80" height="50" alt="" /> 
        <span className='margin'></span>
        </span>
        <div className=''>
        <ul className="navbar-nav margins">
            <li className="nav-item">
                <NavLink className="details1" exact to="/" >Home</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink className="details" to="/favs" >Favorites</NavLink>
            </li>
        </ul>
        </div>
        </div>
    </nav>
    )
}

{/* <header className="">
            <div>
                <img id="logoHenry" src={Logo} width="30" height="30" className="" alt="" />
            </div>
            <nav>
                <ul className="">
                    <li className="">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header> */}