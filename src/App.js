import Header from "./components/Header";
import React, {Fragment, useState} from 'react'
import Formulario from "./components/Formulario";

function App() {

  //Definir el state
  const [cantidad, guardarCantidad] = useState(0);

  return (
    <Fragment> 
      <Header 
        title="Cotizador de Prestamos"
        description="Use the form and get a cotization"
      />
      
      <div className="container">
        <Formulario 
          cantidad = {cantidad}
          guardarCantidad = {guardarCantidad}
        />
      </div>
    </Fragment>
  );
}

export default App;
