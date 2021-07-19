import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, title, price, pictureURL, stock, description }) => {
  const [addQty, setAddQty] = useState();

  useEffect(() => {
    console.log(addQty);
  });

  return (
    <div id='item-detail'>
      <div id='img-description'>
        <img
          src={pictureURL}
          alt={'imagen de ' + title}
        />
      </div>
      <div id='description-content'>
        <div id='id-positioning'>
          <p>{id}</p>
        </div>
        <h1>{title}</h1>
        <h2>{'US$' + price}</h2>
        <p>{description}</p>
        <ItemCount
          stock={stock}
          initial={0}
          onAdd={(initial) => setAddQty(initial)}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
