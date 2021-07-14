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
    GetItems().then((response) => { setProduct(response); });
    GetItems().then((response) => { console.log(response.forEach(element => element.id)); });
  });

  return (
    <div>
      {product.map((products, i) => (
        <ItemDetailContainer
          key={i}
          id={products.id}
          title={products.title}
          price={products.price}
          pictureURL={products.pictureURL}
          stock={products.stock}
          description={products.description}
        />
      ))}
    </div>
  );
};

export default ItemRouter;
