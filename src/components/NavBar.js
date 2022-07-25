import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';


function NavBar(){
    
    return(
    
    <nav class="navbar navbar-dark bg-light navbar-expand-lg px-4">
       
        <div class="container-fluid">
            
            <NavLink class="navbar-brand link-info" to='/'>VIDEOJUEGOS STORE</NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                
                    <li class="nav-item p-2">
                    <NavLink class="nav-link" to='/categoria/nintendo'>NINTENDO</NavLink>
                    </li>
                    <li class="nav-item p-2">
                    <NavLink class="nav-link" to='/categoria/playstation'>PLAYSTATION</NavLink>
                    </li>
                    <li class="nav-item p-2">
                    <NavLink class="nav-link" to='/categoria/xbox'>XBOX</NavLink>
                    </li>
                    
                </ul>
            
            </div>
            
        </div>

        <div >
            <NavLink className="navlink" to='/cart'><CartWidget />
            </NavLink>
        </div>
    </nav>

  



    );
}




export default NavBar