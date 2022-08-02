import { createContext, useState, useEffect } from "react";



export const CartContext = createContext();


const CartContextProvider =({children})=>{

    const[cartList, setCartList]= useState([]);

    useEffect(() => {
        console.log('cartList', cartList)
    }, [cartList])

    const addToCart =(item)=>{
        setCartList([item])
    }

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

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (id) => {
        return cartList.some(item => item.id === id);
    }

    return(
        <CartContext.Provider value={{cartList, addItem,removeItem,clear}}>
            
            {children}

        </CartContext.Provider>
    )


}

export default CartContextProvider;



