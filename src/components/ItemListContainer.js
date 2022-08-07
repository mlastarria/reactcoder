import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import products from './product-data';
import {db} from './firebaseConfig';
import { async } from '@firebase/util';
import { getFirestore, collection, getDocs, query, where,doc} from 'firebase/firestore';



const ItemListContainer = () => {

    // const [data, setData] = useState([]);
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



// function ItemListContainer(){

    
//     const [listado, setListado] = useState([]);

//     const {categoria}=useParams();

//     useEffect(() =>{
        // este es el antiguo
//         // const getListado=new Promise(resolve =>{
//         //     setTimeout(()=>{
//         //         resolve(products);
//         //     },100);
//         // });

//         // if (categoria){
//         // getListado.then(res=> setListado(res.filter(products=> products.categoria === categoria)));
//         // }else{

//         // getListado.then(res=> setListado(res));
//         // }
// aca termina el antiguo




//aca comienza el nuevo con el que funciono mostrando
//         const firestoreFetch = async () => {
            
//             const querySnapshot = await getDocs(collection(db, "products"));
//             const dataFromFirestore = querySnapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data()
//             }))
//             return dataFromFirestore
//         }
//         firestoreFetch()
//         .then(result => setListado(result))
//         .catch(err => console.log(err))






//     }, [categoria]);

// aca termina el nuevo con el que funciono antes
    





    return(
        
    <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
        <ItemList listado={listado} />
    </div>


    );
}

export default ItemListContainer
