import React,{useState} from 'react';

const ItemCount = ({stock,initial,onAdd}) =>{

    const [rates,setRates] =useState(initial);

    const addClick=()=>{
        if(rates<stock){
            const numeroActual = rates + 1;
            setRates(numeroActual);
        }
        
    }

    const substractClick=()=>{
        if(rates>initial){
            const numeroActual = rates + -1;
            setRates(numeroActual);
        }
    }

   
 

    return(
        
        <div class="d-grid gap-2 ">

            <div class="container">
                <div class="row">

                    <div class="col d-grid">
                         <button class="btn btn-danger" onClick={substractClick}>-</button>
                    </div>

                    <div class="col">
                        <p class="text-center">{rates}</p>
                    </div>

                    <div class="col d-grid">
                        <button class="btn btn-success" onClick={addClick}>+</button>
                    </div>

                </div>
            </div>


            
            <button class="btn btn-primary" type="button" onClick={()=>onAdd(rates)}>Añadir al Carrito</button>
            


        </div>
        
    );
}

export default ItemCount