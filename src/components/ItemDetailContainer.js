import products from './product-data';
import ItemDetail from './ItemDetail';
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


function ItemDetailContainer(){

    
    // const [listado, setListado] = useState({});

    // const getListado=new Promise(resolve =>{
    //     setTimeout(()=>{
    //         resolve(products[1]);
    //     },2000);
    // });

    // getListado.then(res=> setListado(res));


    const [listado, setListado] = useState({});

    const {id}=useParams();

    useEffect(() =>{
        
        const getListado=new Promise(resolve =>{
            setTimeout(()=>{
                resolve(products);
            },2000);
        });

        if (id){
        getListado.then(res=> setListado(res.find(products=> products.id === parseInt(id))));
        }else{

        getListado.then(res=> setListado(res));
        }


    }, [id]);

    // useEffect(() => {
    //     const getListado = new Promise((resolve) => {
    //       setTimeout(() => {
    //         resolve(products);
    //       }, 1000);
    //     });
    //     getListado.then((res) =>
    //           setListado(res.find((products) => products.Id === id)),
    //       );
    //   }, [id]);
    


    return(
        
    <div class="row row-cols-1 row-cols-md-4 g-4 mt-3">
        <ItemDetail listado={listado} />
    </div>


    );
}

export default ItemDetailContainer
