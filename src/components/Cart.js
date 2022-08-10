import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ContentItemCart from './ContentItemCart';
import CartSummary from './CartSummary';
import { WrapperCart, TitleCart } from './styledComponents';
import { addDoc, collection, getFirestore, serverTimestamp} from 'firebase/firestore';




const Cart = () => {
    const test = useContext(CartContext)

    const order = {
        buyer:{
          name: "Abby",
          email: "info@mauriciolastarria.com",
          phone: "939383872",
        },

        date: serverTimestamp(),
        items: test.cartList.map (item => ({id: item.id, title:item.name, price:item.price, quantity:item.quantity})),
        total: test.totalPrice(),
      };
   
     

      const handleClick = () =>{
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
        .then (({id}) => alert('Se ha creado la orden Satisfactoriamente. Su id de compra es ' + id))
        
        .catch (err => alert(err))
      }




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
                        <button onClick={handleClick}>Confirmar compra</button>
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