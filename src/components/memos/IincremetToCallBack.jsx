import React from 'react'

export const IincremetToCallBack = ( { increment } ) => {
    console.log('Corriendo');
  return (
    <button type='button' className='btn btn-success m-1'
        onClick={ () => increment(5) }>IincremetToCallBack</button>
  )
}
