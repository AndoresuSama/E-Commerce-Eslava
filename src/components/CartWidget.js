import React from 'react';
import RedCart from '../Assets/RedCart.svg';

const CartWidget = () => {
  return (
    <div id='cart-container'>
      <img src={RedCart} alt='Carrito de Compras' />
    </div>
  );
};

export default CartWidget;
