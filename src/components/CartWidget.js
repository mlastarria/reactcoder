import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '../App.css';

function CartWidget() {
    const context = useContext(CartContext);
    const products = context.totalProducts();

    return (
        <i className="bi bi-cart position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {products}
            </span>

        </i>
    );
}

export default CartWidget

