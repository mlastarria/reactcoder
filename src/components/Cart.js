import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ContentItemCart from './ContentItemCart';
import CartSummary from './CartSummary';
import { WrapperCart, TitleCart } from './styledComponents';
import '../App.css';


const Cart = () => {
    const test = useContext(CartContext)

    return (
        <WrapperCart>
            <TitleCart>CARRO DE COMPRAS</TitleCart>
            {test.cartList.length > 0 ? (
                <div className="row">
                    <div className="col-lg-9">
                        <button className="btn btn-danger" onClick={test.clear}>BORRAR TODO</button>
                        {test.cartList.map((item, index) => (
                            <ContentItemCart
                                key={`cart-${index}`}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                quantity={item.quantity}
                                onRemove={test.removeItem}
                            />
                        ))}
                    </div>
                    <div className="col-lg-3">
                        <CartSummary
                            count={test.totalProducts()}
                            price={test.totalPrice()}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <div>No hay productos en el carrito</div>
                    <Link to="/">Volver al HOME</Link>
                </div>
            )}
        </WrapperCart>
    )
}

export default Cart;