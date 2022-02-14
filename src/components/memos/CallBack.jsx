import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { IincremetToCallBack } from './IincremetToCallBack'

const CallBack = () => {
    const [counter, setCounter] = useState(10);
    const [testing, setTesting] = useState(true);

    const increment = useCallback(
      ( value ) => {
        setCounter(c=>c+value);
        // setCounter(counter + 1);
      },
      [setCounter],
    )

    const procesoPesado = (iteraciones) => {
        console.log(`si ejecute`);  
        return `${ iteraciones } iteraciones realizadas`;
      };
    
      const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]) 
    
        
  return (
    <>
        <hr />
        <p> { memoProcesoPesado } </p>
        <h1>useCallback</h1>
        <h3>{ counter }</h3>
        <IincremetToCallBack increment={ increment } />
        <button
            className='btn btn-primary'
            onClick={()=>setTesting(!testing)}>{JSON.stringify(testing)}</button>
    </>
  )
}

export default CallBack