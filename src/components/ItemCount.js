import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [items, setItems] = useState(initial);

  function moreItems () {
    if (stock > 1 && items < stock) {
      setItems(items + 1);
    }
  }

  function lessItems () {
    if (items !== 0) {
      setItems(items - 1);
    }
  }

  const throwItems = () => {
    return toString(items);
  };

  return (
    <div className='item-count-container'>
      <div className='itemcount-button-order'>
        <button onClick={lessItems}>-</button>
        <p className='qty-value'>{items}</p>
        <button onClick={moreItems} disabled={items === stock}>+</button>
      </div>
      <button onClick={throwItems()} disabled={items === 0}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
