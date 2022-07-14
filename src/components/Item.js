import React from 'react';



const Item = (props) => {
    return(
        <div>
        <p>ID: {props.id}</p>
        <p>NOMBRE: {props.nombre}</p>
        <p>DESCRIPCION: {props.descripcion}</p>
        <p>STOCK DISPONIBLE: {props.stock}</p>
        <p>IMAGEN: <img src={props.imagen} width="20%"/></p>
        <hr/>
        </div>
        
    )
}




export default Item

