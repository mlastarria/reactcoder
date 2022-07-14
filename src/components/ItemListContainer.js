import React, {useState} from 'react';
import ItemList from './ItemList';
import products from './product-data';


function ItemListContainer(){

    
    const [listado, setListado] = useState([]);

    const getListado=new Promise(resolve =>{
        setTimeout(()=>{
            resolve(products);
        },2000);
    });

    getListado.then(res=> setListado(res));




    return(
        
    <div class="row row-cols-1 row-cols-md-4 g-4 mt-3">
        <ItemList listado={listado} />
    </div>


    );
}

export default ItemListContainer
