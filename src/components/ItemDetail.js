import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';

const ItemDetail = ({ listado }) => {
    const [goToCart, setGotToCart] = useState(false);
    const test = useContext(CartContext);

    const onAdd = (item) => {
        setGotToCart(true);
        // test.addToCart(item)
        test.addItem(listado, item)
    }

    return (
        <div className="row justify-content-center mt-4 mb-4">
            <div className="col-sm-6">
                <div className="card h-100 p-3">
                    <img src={listado.imagenurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{listado.nombre}</h4>
                      
                        <p className="card-text">{listado.descripcion}</p>
                        <p className="card-text">US$ {listado.precio}</p>
                        {
                            goToCart
                                ? <Link to='/cart'>Terminar compra</Link>
                                : <ItemCount stock={listado.stock} initial={1} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail

