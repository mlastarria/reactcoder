import React from 'react';
import { ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from './styledComponents';

const ContentItemCart = (props) => {
    const { id, name, price, quantity, onRemove } = props;

    return (
        <ContentCart>
            <Product>
                <ProductDetail>
                    <ImageCart src="https://res.cloudinary.com/hdsqazxtw/image/upload/v1559681445/logo_coderhouse_1_rec5vl.png" />
                    <Details>
                        <span>
                            <b>Producto:</b> {name}
                        </span>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                        <ProductAmount>Cantidad Seleccionada: {quantity}</ProductAmount>
                    </ProductAmountContainer>
                    <ProductPrice>El precio es: ${price}</ProductPrice>
                </PriceDetail>
                <button onClick={() => onRemove(id)}>BORRAR</button>
            </Product>
        </ContentCart>
    )
}

export default ContentItemCart
