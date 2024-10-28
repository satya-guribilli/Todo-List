import React from "react";

function Todo({ todo, todoIndex, delTodo }) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={() => delTodo(todoIndex)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
