import React from 'react';
import { Link } from 'react-router-dom';

/* -- Componentes -- */
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div id='nav-container'>
      <nav id='nav-fix'>
        <ul>
          <li><Link exact to='/'><h1>TheAndoSama Shop</h1></Link></li>
          <li><Link to='/store'>Tienda</Link></li>
          <li><Link to='/donations'>Donaciones</Link></li>
          <Link to='/cart'><CartWidget /></Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
