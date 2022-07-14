import React from 'react';
import Item from './Item';



const ItemList = ({listado = []}) => {

    return(
       
        listado.map (film =>  <Item key={film.id} info={film} /> )
       


    );


}

export default ItemList