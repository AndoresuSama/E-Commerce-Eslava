import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [items, setItems] = useState(initial);

  function moreItems () {
    if (stock > 1 && items < stock) {
      setItems(items + 1);
    } else {
      alert('No tenemos más stock de este producto.');
    }
  }

  function lessItems () {
    if (items !== 0) {
      setItems(items - 1);
    }
  }

  return (
    <div className='item-count-container'>
      <div className='itemcount-button-order'>
        <button onClick={lessItems}>-</button>
        <p className='qty-value'>{items}</p>
        <button onClick={moreItems}>+</button>
      </div>
      <button onClick={onAdd} disabled={items === 0}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
