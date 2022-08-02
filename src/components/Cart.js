import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from './styledComponents';

const Cart = () => {

const test = useContext(CartContext)
console.log(test.cartList)

  return (
   

      

          <WrapperCart>
          <TitleCart>YOUR CART</TitleCart>
          <button onClick={test.clear}>BORRAR TODO</button>

          {test.cartList.length > 0 && test.cartList.map(item=>(

          <ContentCart>
                  <Product>
                  <ProductDetail>
                      <ImageCart src="https://res.cloudinary.com/hdsqazxtw/image/upload/v1559681445/logo_coderhouse_1_rec5vl.png" />
                      <Details>
                      <span>
                          <b>Producto:</b> {item.name}
                      </span>
                      </Details>
                  </ProductDetail>
                  <PriceDetail>
                      <ProductAmountContainer>
                      <ProductAmount>Cantidad Seleccionada: {item.quantity}</ProductAmount>
                      </ProductAmountContainer>
                      <ProductPrice>El precio es: ${item.price}</ProductPrice>
                  </PriceDetail>
                  <button onClick={()=>test.removeItem(item.id)}>BORRAR</button>
                  </Product>
          </ContentCart>
                  ))
                }
                      
      </WrapperCart>

  




        
      

      

 
  )
}

export default Cart;