import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Item = ({ product }) => {
  return (
    <>
      <Link to={`/item/${product.id}`}>
        <div id='item'>
          <p>{'#' + product.id}</p>
          <h1>{product.title}</h1>
          <h2>{'US$' + product.price}</h2>
          <img
            src={product.pictureURL}
            alt={'Imagen de ' + product.title}
          />
          <ItemCount
            stock={product.stock}
            initial={0}
            onAdd={(x) => alert('Se ha añadido ' + x + ' al carrito')}
          />
        </div>
      </Link>
    </>
  );
};

export default Item;
