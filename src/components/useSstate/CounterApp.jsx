import "./CounterApp.css";
import React, { useState } from "react";

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 20,
    counter4: 20,
    counter5: 20,
    counter6: 20,
    etc: "etc",
  });
  const { counter1, counter2 } = state; //DESTRUCTURO SOLO EL COUNTER 1 Y 2
  return (
    <>
      <h1>useState</h1>
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setState({
            ...state, //USO EL OPERADOR SPRED PARA PASARLE TODO EL ESTADO Y SOLO MODIFICAR LO QUE QUIERO
            counter1: counter1 + 1, //EN ESTE CASO SOBREESCRIBO EL COUNTER1 Y LO AUMENTO EN 1 Y TODO QUEDA IGUAL
            //ESTO PARA EVITAR PONER TOOODAS LAS VARIABLES DE ESTADO CADA VEZ QUE QUIERO CAMBIAR SOLO UNA
          })
        }
      >
        +1
      </button>
    </>
  );
};

export default CounterApp;
