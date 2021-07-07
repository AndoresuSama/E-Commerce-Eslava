import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* -- Componentes -- */
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

/* -- Estilos -- */
import './App.css';

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <NavBar />
        </header>
        <body className='App-body'>
          <Switch>
            <Route exact path='/'>
              <ItemListContainer
                saludo='Bienvenido a TheAndoSama Shop'
                mensaje='La tienda oficial de TheAndoSama'
              />
            </Route>
            <Route exact path='/Details'>
              <ItemDetailContainer />
            </Route>
          </Switch>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
