import Header from "./components/Header";
import Mensaje from "./components/Mensaje";
import React, {Fragment, useState} from 'react'
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

function App() {

  //Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando ] = useState(false);

  let component;

  if(cargando){
    component = < Spinner />
  }
  else if(total === 0){
    component = <Mensaje />
  }else{
    component = <Resultado
                  total = {total}
                  plazo = {plazo}
                  cantidad = {cantidad}
                />
  }

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
          plazo= {plazo}
          guardarPlazo = {guardarPlazo}
          guardarTotal = {guardarTotal}
          guardarCargando= {guardarCargando}
        />

        <div className="mensajes">
          {component}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
