import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import products from './product-data';


function ItemListContainer(){

    
    const [listado, setListado] = useState([]);

    const {categoria}=useParams();

    useEffect(() =>{
        
        const getListado=new Promise(resolve =>{
            setTimeout(()=>{
                resolve(products);
            },2000);
        });

        if (categoria){
        getListado.then(res=> setListado(res.filter(products=> products.categoria === categoria)));
        }else{

        getListado.then(res=> setListado(res));
        }


    }, [categoria]);

    





    return(
        
    <div class="row row-cols-1 row-cols-md-4 g-4 mt-3">
        <ItemList listado={listado} />
    </div>


    );
}

export default ItemListContainer
