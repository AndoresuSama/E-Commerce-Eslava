import React from 'react';
import ItemCount from './ItemCount';

const Item = ({ id, title, price, pictureURL, stock }) => {
  return (
    <div id='item'>
      <p>{'#' + id}</p>
      <h1>{title}</h1>
      <h2>{'US$' + price}</h2>
      <img
        src={pictureURL}
        alt={'Imagen de ' + title}
      />
      <ItemCount
        stock={stock}
        initial={0}
        onAdd={(x) => alert('Se ha añadido ' + x + ' al carrito')}
      />
    </div>
  );
};

export default Item;
