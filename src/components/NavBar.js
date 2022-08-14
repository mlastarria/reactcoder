import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-success navbar-expand-lg px-4">
            <div className="container-fluid">
                <NavLink className="navbar-brand link-info" to='/'>VIDEOJUEGOS STORE</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item p-2">
                            <NavLink className="nav-link" to='/categoria/nintendo'>NINTENDO</NavLink>
                        </li>
                        <li className="nav-item p-2">
                            <NavLink className="nav-link" to='/categoria/playstation'>PLAYSTATION</NavLink>
                        </li>
                        <li className="nav-item p-2">
                            <NavLink className="nav-link" to='/categoria/xbox'>XBOX</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div >
                <NavLink className="navlink" to='/cart'>
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar