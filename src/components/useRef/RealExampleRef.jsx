import React, { useState } from "react";
import MultipleCustomHooks from "../examples/MultipleCustomHooks";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  const handleButton = () =>{
      setShow(!show)
  }

  return (
    <>
      <hr />
      <h1>Rreal Example of seRef</h1>
      <h3>Here I used the MultipleHooks Again to show the use of useRef</h3>

      <button 
      onClick={ handleButton }
      type="button" className="btn btn-success">Mostar - Ocultar - MultipleCustomHooks</button>
      {show && <MultipleCustomHooks />}
      <hr />
    </>
  );
};

export default RealExampleRef;
