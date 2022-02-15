import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ state, handleDeleteButton, handlePushP }) => {
  return (
    <>
      <ol className="list-group list-group-flush">
        {state.map((item, i) => {
          return (
            <TodoListItem
              key={item.id}
              item={item}
              handlePushP={handlePushP}
              handleDeleteButton={handleDeleteButton}
            />
          );
        })}
      </ol>
    </>
  );
};

export default TodoList;
