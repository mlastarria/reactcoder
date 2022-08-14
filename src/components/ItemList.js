import React from 'react';
import Item from './Item';

const ItemList = ({ listado = [] }) => {
    return (
        listado.map(producto => <Item key={producto.id} info={producto} />)
    );
}

export default ItemList