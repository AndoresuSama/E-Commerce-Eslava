import React from 'react';

/* -- Componentes -- */
import ItemListContainer from '../Components/ItemListContainer';

const Store = () => {
  return (
    <div>
      <div>
        <ItemListContainer
          saludo='Bienvenido a TheAndoSama Shop'
          mensaje='Aquí encontrará nuestro listado de productos completo'
        />
      </div>
    </div>
  );
};

export default Store;
