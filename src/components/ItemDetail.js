import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, title, price, pictureURL, stock, description }) => {
  const [addQty, setAddQty] = useState();

  const onAdd = (x) => {
    setAddQty(x);
  };

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
        {addQty > 0
          ? <Link to='/cart'>
            <div className='item-count-container'>
              <div className='itemcount-button-order'>
                <button id='purchase-confirmation'>Terminar mi compra</button>
              </div>
            </div>
            </Link>
          : <ItemCount stock={stock} onAdd={onAdd} />}
      </div>
    </div>
  );
};

export default ItemDetail;
