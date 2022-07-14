import React from 'react';
import Item from './Item';
import products from './product-data';


const ItemList = (product) => {

    return(
       
        <div>
        {
            products.map(products =>
            
                    
                <Item id={products.id} nombre={products.nombre} descripcion={products.descripcion} stock={products.stock} imagen={products.imagenurl}/>
                  
            )
        }
        </div>
    )


}

export default ItemList