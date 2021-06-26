import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemsArray = [
  {
    id: '001',
    title: 'Taza',
    price: 15,
    pictureURL: '../Assets/Tazaedit.jpg',
    stock: 10
  },
  {
    id: '002',
    title: 'Franela',
    price: 25,
    pictureURL: '',
    stock: 15
  },
  {
    id: '003',
    title: 'Mochila',
    price: 30,
    pictureURL: '',
    stock: 5
  },
  {
    id: '004',
    title: 'Gorra',
    price: 10,
    pictureURL: '',
    stock: 12
  }
];

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const GetItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(ItemsArray));
    });
  };

  useEffect(() => {
    GetItems().then((ItemsTotales) => { setProducts(ItemsTotales); });
  });

  return (
    <div id='item-list'>
      {products.map((product, i) => (
        <Item
          key={i}
          id={product.id}
          title={product.title}
          price={product.price}
          pictureUrl={product.pictureURL}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;
