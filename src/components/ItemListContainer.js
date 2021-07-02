import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

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

const ItemListContainer = ({ saludo, mensaje }) => {
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
    <div id='greeting-container'>
      <h2>{saludo}</h2>
      <h3>{mensaje}</h3>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
