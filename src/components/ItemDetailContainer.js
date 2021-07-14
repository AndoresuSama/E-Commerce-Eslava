import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ id, title, price, pictureURL, stock, description }) => {
  return (
    <div id='item-detail-container'>
      <ItemDetail
        id={id}
        title={title}
        price={price}
        pictureURL={pictureURL}
        stock={stock}
        description={description}
      />
    </div>
  );
};

export default ItemDetailContainer;
