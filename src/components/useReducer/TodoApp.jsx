import React, { useEffect, useReducer } from "react";

import { todoReducer } from "./todoReducer";

import "./TodoAppStyles.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  

  const inicialState = [
    //ESTE SOLO NOS SIRVE LA PROMERA VEZ, DESPUES SE QUEDA EN EL STATE DE REDUCER
    {
      id: new Date().getTime(),
      desc: "Aprendiendo React",
      done: false,
    },
  ];

  const init = () => {
    // return [ //ESTE SOLO NOS SIRVE LA PROMERA VEZ, DESPUES SE QUEDA EN EL STATE DE REDUCER
    //     {
    //       id: new Date().getTime(),
    //       desc: "Aprendiendo React",
    //       done: false,
    //     },
    //   ]
    //! AL INICIO SOLO MANDABA UN JSON MESIO INICIALIZADO
    // COMO AHORA USAMOS EL LOCAL STORAGE EL INICIALSTATE VIENE DE AHI, Y LO QUE DEVULVE SE CONVIERTE EN EL INICIAL
    return JSON.parse(localStorage.getItem("state")) || [];
  };

  //   const [state, dispatch] = useReducer(todoReducer, inicialState);
  const [state, dispatch] = useReducer(todoReducer, [], init);
  // La de arriba seria inicializar con init y lo que sea que retorme esa funcion seria el inicial state

  

  const handleDeleteButton = ({ target }) => {
    const action = {
      type: "delete",
      payload: target.value,
    };
    dispatch(action);
  };

  const handlePushP = (id) => {
    const action = {
      type: "toggle",
      payload: id,
    };
    dispatch(action);
  };

  const handleAddTodo = (desc) => {
    const action = {
      type: "add",
      payload: {toDo:desc},
    };
    dispatch(action);
  };

  

  useEffect(() => {
    // SI LOS TODOS CAMBIAN GRABO EN EL LOCAL STORAGE
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <hr />
      <h1>TodoApp usando useReducer</h1>

      <div className="row">
        <div className="col-7">
          <TodoList
            state={state}
            handleDeleteButton={handleDeleteButton}
            handlePushP={handlePushP}
          />
        </div>
        <div className="col-5">
          <AddTodo handleAddTodo={handleAddTodo} />
        </div>
      </div>

      <hr />
    </>
  );
};

export default TodoApp;
