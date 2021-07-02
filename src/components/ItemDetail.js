import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, title, price, pictureURL, stock, description }) => {
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
          onAdd={(x) => alert('Se ha añadido ' + x + ' al carrito')}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
