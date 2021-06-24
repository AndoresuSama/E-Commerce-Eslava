import React from 'react';
import ItemCount from './ItemCount';

const ItemsArray = [
  {
    id: '001',
    title: 'Taza',
    price: 'US$15',
    pictureURL: ''
  },
  {
    id: '002',
    title: 'Franela',
    price: 'US$25',
    pictureURL: ''
  },
  {
    id: '003',
    title: 'Mochila',
    price: 'US$30',
    pictureURL: ''
  },
  {
    id: '004',
    title: 'Gorra',
    price: 'US$10',
    pictureURL: ''
  }
];

const Item = () => {
  return (
    <ItemCount
      stock={5}
      initial={0}
      onAdd={(x) => alert('Se ha añadido ' + x + ' al carrito')}
    />
  );
};

export default Item;
