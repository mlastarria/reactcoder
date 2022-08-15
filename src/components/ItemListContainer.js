import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import products from './product-data';
import { db } from './firebaseConfig';
import { async } from '@firebase/util';
import { getFirestore, collection, getDocs, query, where,doc} from 'firebase/firestore';



const ItemListContainer = () => {

   
    const [listado, setListado] = useState([]);
    const {categoria}=useParams();

    useEffect(()=>{
     const querydb = getFirestore();
     const queryCollection = collection(querydb, 'products');
     
     if(categoria){
         const queryFilter = query(queryCollection, where('categoria', '==', categoria))
         getDocs(queryFilter)
         .then(res => setListado(res.docs.map(products => ({id: products.id, ...products.data()}))))

     }else{
        getDocs(queryCollection)
         .then(res => setListado(res.docs.map(products => ({id: products.id, ...products.data()}))))

     }
    
    }, [categoria] );







    return(
        
    <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
        <ItemList listado={listado} />
    </div>


    );
}

export default ItemListContainer
