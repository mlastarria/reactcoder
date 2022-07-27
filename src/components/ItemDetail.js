import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';




const ItemDetail = ({listado}) => {


    const[goToCart,setGotToCart] = useState(false);

    const onAdd=()=>{
        setGotToCart(true);
    }
    
    return(

        <div class="col">
            <div class="card h-100 p-3">
                <img src={listado.imagenurl}  class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4 class="card-title">{listado.nombre}</h4>
                    <h5 class="card-title">ID: {listado.id}</h5>
                    <p class="card-text">{listado.descripcion}</p>
                    <p class="card-text">US$ {listado.precio}</p>
                  
                  {
                    goToCart
                    ? <Link to ='/cart'>Terminar compra</Link>
                    : <ItemCount stock={5} initial={1} onAdd={onAdd} />

                  }
                   

                  

                </div>
            </div>
        </div>





        
    )
}




export default ItemDetail

