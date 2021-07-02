import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div id='item-list'>
      {products.map((product, i) => (
        <Item
          key={i}
          product={product}
        />
      ))}
    </div>
  );
};

export default ItemList;
