import React from "react";
import { useForm } from "../../hooks/useForm";

const AddTodo = ({ handleAddTodo }) => {

  const { valuesForm, handleInputChange, reset } = useForm({
    toDo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(e.target.value)
    reset();
  };

  return (
    <>
      <h4>Agregar Todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="toDo"
          id="toDo"
          placeholder="Tarea..."
          className="form-control"
          onChange={handleInputChange}
          value={valuesForm.toDo}
        />
        <button type="submit" className="btn btn-outline-primary mt-1 col-12">
          AddTodo
        </button>
      </form>
    </>
  );
};

export default AddTodo;
