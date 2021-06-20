import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div id='nav-container'>
      <nav id='nav-fix'>
        <ul>
          <li><h1>TheAndoSama Shop</h1></li>
          <li>Inicio</li>
          <li>Tienda</li>
          <li>Donaciones</li>
          <CartWidget />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
