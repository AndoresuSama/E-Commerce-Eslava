import React from 'react';

/* -- Componentes -- */
import ItemListContainer from '../Components/ItemListContainer';

const Home = () => {
  return (
    <div>
      <ItemListContainer
        saludo='Bienvenido a TheAndoSama Shop'
        mensaje='La tienda oficial de TheAndoSama'
      />
    </div>
  );
};

export default Home;
