import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ saludo, mensaje }) => {
  return (
    <div id='greeting-container'>
      <h2>{saludo}</h2>
      <h3>{mensaje}</h3>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
