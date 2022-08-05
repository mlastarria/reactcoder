import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '../App.css';

function CartWidget() {
    const context = useContext(CartContext)
    if (context.cartList.length === 0) {
        return (
        <i className="bi bi-cart position-relative">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {"0"}
        </span>

    </i>
    )
    }
    return (
        <i className="bi bi-cart position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {context.totalProducts()}
            </span>

        </i>
    );
}

export default CartWidget

