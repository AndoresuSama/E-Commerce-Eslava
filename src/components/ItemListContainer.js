import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ saludo, mensaje }) => {
  return (
    <div id='greeting-container'>
      <h2>{saludo}</h2>
      <h3>{mensaje}</h3>
      <ItemCount
        stock={5}
        initial={0}
        onAdd={(x) => alert('Se ha añadido ' + x + ' al carrito')}
      />
    </div>
  );
};

export default ItemListContainer;
