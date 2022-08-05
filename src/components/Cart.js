import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ContentItemCart from './ContentItemCart';
import CartSummary from './CartSummary';
import { WrapperCart, TitleCart } from './styledComponents';

const Cart = () => {
    const test = useContext(CartContext)

    return (

        <WrapperCart>
            <TitleCart>CARRO DE COMPRAS</TitleCart>
            {test.cartList.length > 0 ? (
                <div className="row">
                    <div className="col-lg-10">
                    <button onClick={test.clear}>BORRAR TODO</button>
                    {test.cartList.map((item, index) => (
                        <ContentItemCart
                            key={`cart-${index}`}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            onRemove={test.removeItem}
                        />
                    ))}
                    </div>
                    <div className="col-lg-2">
                        <CartSummary
                            count={test.totalProducts()}
                            price={test.totalPrice()}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <div>No items</div>
                    <Link to="/">Go back</Link>
                </div>
            )}
        </WrapperCart>

    )
}

export default Cart;