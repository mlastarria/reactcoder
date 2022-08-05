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
        
        <div className="d-grid gap-2 ">

            <div className="container">
                <div className="row">

                    <div className="col d-grid">
                         <button className="btn btn-danger" onClick={substractClick}>-</button>
                    </div>

                    <div className="col">
                        <p className="text-center">{rates}</p>
                    </div>

                    <div className="col d-grid">
                        <button className="btn btn-success" onClick={addClick}>+</button>
                    </div>

                </div>
            </div>


            
            <button className="btn btn-primary" type="button" onClick={()=>onAdd(rates)}>
                {rates === stock ? "Finish my purchase" : "Añadir al Carrito"}
            </button>
            


        </div>
        
    );
}

export default ItemCount