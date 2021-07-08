import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* -- Componentes -- */
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer';

/* -- Paginas -- */
import Home from './Pages/Home';
import Store from './Pages/Store';
import Donations from './Pages/Donations';
import Cart from './Pages/Cart';

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
              <Home />
            </Route>
            <Route path='/store'>
              <Store />
            </Route>
            <Route exact path='/donations'>
              <Donations />
            </Route>
            <Route exact path='/cart'>
              <Cart />
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
