import React from 'react';
import '../App.css';

function CartWidget(){
    
    return(
        

        <i class="bi bi-cart position-relative">

            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                <span class="visually-hidden">unread messages</span>
            </span>

        </i>
    
    


    );
}

export default CartWidget

