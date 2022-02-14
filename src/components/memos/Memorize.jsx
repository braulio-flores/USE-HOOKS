import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import Small from './Small';

const Memorize = () => {

   const [show, setShow] = useState(true)
   const {state:counter, increment} =  useCounter(10);

  return (
    <>
        <h1>Memorize</h1>
        <h1>Counter: <Small value={counter} /></h1>        
        <button type="button" onClick={ increment } className="btn btn-primary">+1</button>
        <button type="button" onClick={ ()=>setShow(!show) } className="btn btn-outline-primary ml-3">show/hide { JSON.stringify(show) }</button>
        <hr />
    </>
  )
}

export default Memorize