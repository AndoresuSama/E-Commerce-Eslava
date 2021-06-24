import React from 'react';
import Item from './Item';

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

async function GetItems () {
  const response = await ItemsArray.map((products) => {
    return (
      <div>
        <h1>{products.title}</h1>
      </div>
    );
  });

  setTimeout(() => {
    return response;
  }, 2000);
}

GetItems();

const ItemList = () => {
  return <Item />;
};

export default ItemList;
