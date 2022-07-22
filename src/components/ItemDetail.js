import React from 'react';




const ItemDetail = ({listado}) => {


    
    return(

        <div class="col">
            <div class="card h-100 p-3">
                <img src={listado.imagenurl}  class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4 class="card-title">{listado.nombre}</h4>
                    <h5 class="card-title">ID: {listado.id}</h5>
                    <p class="card-text">US$ {listado.precio}</p>

                  

                </div>
            </div>
        </div>





        
    )
}




export default ItemDetail

