import React from 'react';
import { Link } from 'react-router-dom';

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

const ItemRouter = () => {
  return (
    <div>
      {ItemsArray.map((items, i) => (
        <Link
          key={i}
          to={items.id}
        >{items.name}
        </Link>
      ))}
    </div>
  );
};

export default ItemRouter;
