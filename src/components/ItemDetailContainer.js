import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemsArray = [
  {
    id: '#001',
    title: 'Taza',
    price: 15,
    pictureURL: '../Assets/Tazaedit.jpg',
    stock: 10,
    description: 'Taza con el logo de Sama'
  }
];

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  const GetItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(ItemsArray), 2000);
    });
  };

  useEffect(() => {
    GetItems().then((ItemsTotales) => { setProducts(ItemsTotales); });
  });
  return (
    <div id='item-detail-container'>
      {products.map((product, i) => (
        <ItemDetail
          key={i}
          id={product.id}
          title={product.title}
          price={product.price}
          pictureURL={product.pictureURL}
          stock={product.stock}
          description={product.description}
        />))}
    </div>
  );
};

export default ItemDetailContainer;
