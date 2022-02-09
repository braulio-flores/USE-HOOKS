import React from 'react';
import '../useSstate/CounterApp.css'
import { useCounter } from '../../hooks/useCounter';
;


const CounterWithCustomHook = () => {

  const {state:counter, increment, decrement, reset} = useCounter(100);

  return <>
    <h1>Count with hooks: { counter }</h1>
    <hr />

    <button className='btn' onClick={ increment }>+1</button>
    <button className='btn' onClick={ reset }> Reset </button>
    {/* SI SE DESEARA MANDAR PARAMETROS SE DEBE DE HACER DE LA SIGUIENTE MANERA  */}
    <button className='btn' onClick={ () => decrement(2) }>-2</button>
    {/* DECREMENTARIA DE DOS EN DOS  */}
  </>;
};

export default CounterWithCustomHook;
