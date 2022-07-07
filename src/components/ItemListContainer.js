import React from 'react';
import ItemCount from './ItemCount';


function ItemListContainer(){
    
    return(
        
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
        <div class="col">
            <div class="card h-100 p-3">
                <img src="https://i.linio.com/p/c878ef90978a7ba1f240fcc4b7fb9f8a-product.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Nintendo Switch OLED Pack Just Dance</h5>
                    <p class="card-text">$399.99</p>

                    <ItemCount />

                </div>
            </div>
        </div>
        
</div>


    );
}

export default ItemListContainer

