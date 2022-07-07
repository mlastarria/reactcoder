import React,{useState} from 'react';

const ItemCount = () =>{

    const [rates,setRates] =useState(0);

    const handleClick=()=>{
        setRates(rates + 1);
    }


    return(
        
        <div class="d-grid gap-2 ">
            <p class="mx-auto">Se añadio {rates} al carrito</p>
            <button class="btn btn-success" type="button" onClick={handleClick}>Añadir Cantidad</button>
            
        </div>
        
    );
}

export default ItemCount