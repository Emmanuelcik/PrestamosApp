import Header from "./components/Header";
import Mensaje from "./components/Mensaje";
import React, {Fragment, useState} from 'react'
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";

function App() {

  //Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");
  const [total, guardarTotal] = useState(0);

  let component;
  if(total === 0){
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
          total = {total}
          guardarTotal = {guardarTotal}
        />

        <div className="mensajes">
          {component}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
