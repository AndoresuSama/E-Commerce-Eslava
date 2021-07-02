import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
      </header>
      <body className='App-body'>
        <ItemListContainer
          saludo='Bienvenido a TheAndoSama Shop'
          mensaje='La tienda oficial de TheAndoSama'
        />
        <ItemDetailContainer />
      </body>
    </div>
  );
}

export default App;
