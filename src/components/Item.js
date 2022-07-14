import React from 'react';
import ItemCount from './ItemCount';



const Item = ({info}) => {

    const onAdd=(param)=>{console.log("la cantidad es " + param)}

    
    return(

        <div class="col">
            <div class="card h-100 p-3">
                <img src={info.imagenurl}  class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4 class="card-title">{info.nombre}</h4>
                    <h5 class="card-title">ID: {info.id}</h5>
                    <p class="card-text">US$ {info.precio}</p>

                    <ItemCount stock={5} initial={1} onAdd={onAdd} />

                </div>
            </div>
        </div>





        
    )
}




export default Item

