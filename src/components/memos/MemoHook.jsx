import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";

const MemoHook = () => {
  const { state:counter, increment } = useCounter(50);
  const [show, setShow] = useState(true);

  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log("Here we go");
    }

    return `${ iteraciones } iteraciones realizadas`;
  };

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
//   SOLO SE LLAMA LA FUNCION CUANDO LA DEPENDENCIA CAMBIA
  

  return (
    <>
      <h1>Memo Hook</h1>
      <h1>Counter: {counter}</h1>
      <h4> { memoProcesoPesado } </h4>
      <button type="button" onClick={increment} className="btn btn-primary">
        +1
      </button>
      <button
        type="button"
        className="btn btn-outline-primary ml-1"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show /Hide {JSON.stringify(show)}
      </button>
      <hr />
    </>
  );
};

export default MemoHook;
