import React from 'react';
import ItemCount from './ItemCount';

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div>
      <p>{id}</p>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <img
        src={pictureUrl}
        alt={'Imagen de ' + title}
      />
      <ItemCount
        stock={5}
        initial={0}
        onAdd={(x) => alert('Se ha añadido ' + x + ' al carrito')}
      />
      <ItemCount />
    </div>
  );
};

export default Item;
