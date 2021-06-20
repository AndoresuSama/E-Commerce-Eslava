import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
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
          mensaje='En este momento no contamos con productos para mostrar, vuelve pronto...'
        />
      </body>
    </div>
  );
}

export default App;
