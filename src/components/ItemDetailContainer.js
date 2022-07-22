import React, {useState} from 'react';
import products from './product-data';
import ItemDetail from './ItemDetail';


function ItemDetailContainer(){

    
    const [listado, setListado] = useState({});

    const getListado=new Promise(resolve =>{
        setTimeout(()=>{
            resolve(products[2]);
        },2000);
    });

    getListado.then(res=> setListado(res));




    return(
        
    <div class="row row-cols-1 row-cols-md-4 g-4 mt-3">
        <ItemDetail listado={listado} />
    </div>


    );
}

export default ItemDetailContainer
