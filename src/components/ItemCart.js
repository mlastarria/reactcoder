import React from "react";
import '../App.css';
import { CartContext } from './CartContext';


const ItemCart = ({ product }) => {
    const { removeItem } = CartContext();
    return (
        <div className='itemCart'>
           
            <div>
                <p>Título: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeItem(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart