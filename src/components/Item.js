import React from 'react';
import ItemCount from './ItemCount';

const Item = (id, title, price, pictureUrl) => {
  return (
    <div>
      <p>{id}</p>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <img
        src={pictureUrl}
        alt={'Imagen de ' + title}
      />
      <ItemCount />
    </div>
  );
};

export default Item;
