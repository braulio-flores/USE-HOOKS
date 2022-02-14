
import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

import './LayoutEffect.css';

const LayoutEffect = () => {

  const pTagRef = useRef() ;
  const [boxSize, setBoxSize] = useState({})

  const {state, increment} = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${ encodeURI(state) }`;
  const {data,loading,error} = useFetch(url);

  useLayoutEffect(() => {
    
    setBoxSize(pTagRef.current.getBoundingClientRect());
  
    return () => {
      
    };
  }, [ data ])

  return (
    <>
      <hr />
      <h1>Multiple Custom HOOKS with useLayoutEffect</h1>
      <h3>Here we use useLayoutEffect</h3>
      { loading && <p> loading... </p> }
      { error && <p> fatal error </p> }
      <blockquote className="blockquote2"> <p ref={ pTagRef }> { JSON.stringify(data?.quote, null,10) } </p> </blockquote> 
      <button onClick={ increment } className="btn btn-primary">Siguiente Frase</button>
      <pre className="m-3"> { JSON.stringify( boxSize, null, 3 ) } </pre>
      <hr />
    </>
  );
};

export default LayoutEffect;
