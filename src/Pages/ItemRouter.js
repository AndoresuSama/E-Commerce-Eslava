import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../Components/ItemDetailContainer';

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
  const { ItemID } = useParams();
  const [product, setProduct] = useState([]);

  const GetItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(ItemsArray));
    });
  };

  useEffect(() => {
    GetItems().then((response) => { setProduct(response.find(response => response.id === ItemID)); });
    console.log(product);
  });

  return (
    <div>
      <ItemDetailContainer
        id={product.id}
        title={product.title}
        price={product.price}
        pictureURL={product.pictureURL}
        stock={product.stock}
        description={product.description}
      />
    </div>
  );
};

export default ItemRouter;
