import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../Components/ItemCount';

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
      setTimeout(() => resolve(ItemsArray), 2000);
    });
  };

  useEffect(() => {
    GetItems().then((response) => { setProduct(response); });
  });

  return (
    <div>
      {product.map((products, i) => (
        <div key='{i}'>
          <div id='item-detail'>
            <div id='img-description'>
              <img
                src={products.pictureURL}
                alt={'imagen de ' + products.title}
              />
            </div>
            <div id='description-content'>
              <div id='id-positioning'>
                <p>{products.id}</p>
              </div>
              <h1>{products.title}</h1>
              <h2>{'US$' + products.price}</h2>
              <p>{products.description}</p>
              <ItemCount
                stock={products.stock}
                initial={0}
                onAdd={(x) => alert('Se ha añadido ' + x + ' al carrito')}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemRouter;
