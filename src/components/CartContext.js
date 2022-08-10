import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider =({children})=>{

    const[cartList, setCartList]= useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCartList([...cartList, {
                id: item.id,
                name: item.nombre,
                price: item.precio,
                quantity,
            }])
        }
    }

    const removeItem = (itemId) => {
        setCartList(cartList.filter(item => item.id !== itemId));
    }




    const totalPrice = () => {
		return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0);
	};

	const totalProducts = () =>
		cartList.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);





    const clear = () => {
        setCartList([]);
    }

    const isInCart = (id) => {
        return cartList.some(item => item.id === id);
    }

    return(
        <CartContext.Provider value={{addItem,removeItem,clear,totalPrice,totalProducts,cartList}}>
            
            {children}

        </CartContext.Provider>
    )


}

export default CartContextProvider;



