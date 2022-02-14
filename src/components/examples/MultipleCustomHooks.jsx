import React from "react";
import { useCounter } from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

const MultipleCustomHooks = () => {

  const {state, increment} = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${ encodeURI(state) }`;
  const {data,loading,error} = useFetch(url);

  return (
    <>
      <hr />
      <h1>Multiple Custom HOOKS</h1>
      <h3>Here we use a combination of useFetch and useCounter, bouth are cusmome hooks</h3>
      { loading && <p> loading... </p> }
      { error && <p> fatal error </p> }
      { !(loading) && <p> { JSON.stringify(data,null,10) } </p> }
      <button onClick={ increment } className="btn btn-primary">Siguiente Frase</button>
      <hr />
    </>
  );
};

export default MultipleCustomHooks;
