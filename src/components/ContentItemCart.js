import React from 'react';
import { ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from './styledComponents';

const ContentItemCart = (props) => {
    const { id, name, image, price, quantity, onRemove } = props;

    return (
        <ContentCart>
            <Product>
                <ProductDetail>
                    <ImageCart src={image} />
                    <Details>
                        <span>
                            <b>Producto:</b> {name}
                        </span>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                        <ProductAmount>Cantidad Seleccionada: <b>{quantity}</b></ProductAmount>
                    </ProductAmountContainer>
                    <ProductPrice>El precio es: <b>${price}</b></ProductPrice>
                </PriceDetail>
                <div className="d-flex align-items-center">
                    <button className="btn btn-danger" onClick={() => onRemove(id)}>BORRAR</button>
                </div>
            </Product>
        </ContentCart>
    )
}

export default ContentItemCart
