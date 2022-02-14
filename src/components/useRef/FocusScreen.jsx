import React, { useRef } from "react";

const FocusScreen = () => {

  const intputRef = useRef();

  const handleSubmit = () => {
    intputRef.current.focus();
    console.log(intputRef);
  }

  return (
    <>
      <h1>Focus Screen - hook useRef</h1>
      <hr />
      <input
      ref={ intputRef }
        className="form-control"
        placeholder="su nombre"
        type="text"
        name=""
        id="suNombreInput"
      />
      <br />
      <button 
        className="btn btn-outline-primary"
        onClick={ handleSubmit }
      >Focus</button>
    </>
  );
};

export default FocusScreen;
