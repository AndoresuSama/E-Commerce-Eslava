import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Item = ({ product }) => {
  return (
    <>
      <Link to={`/item/${product.id}`}>
        <div id='item'>
          <p>{'#' + product.id}</p>
          <img
            src={product.pictureURL}
            alt={'Imagen de ' + product.title}
          />
          <h1>{product.title}</h1>
          <h2>{'US$' + product.price}</h2>
        </div>
      </Link>
    </>
  );
};

export default Item;
