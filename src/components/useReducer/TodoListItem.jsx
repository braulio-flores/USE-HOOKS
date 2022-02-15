import React from "react";

const TodoListItem = ({ item, handlePushP, handleDeleteButton }) => {
  return (
    <>
      <li className="list-group-item">
        <p
          className={`${item.done && "complete"} todoItemP`}
          onClick={() => handlePushP(item.id)}
        >
          <b>id:</b> {item.id} <b>desc:</b> {item.desc} <b>done </b>
          {JSON.stringify(item.done)}
        </p>
        <button
          type="button"
          value={item.id}
          className="btn btn-danger"
          onClick={handleDeleteButton}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
