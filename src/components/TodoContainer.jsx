import React from "react";
import Todo from "./todo";
function TodoContainer({ todos, delTodo }) {
  return (
    <div className="container">
      {todos.map((todo, todoIndex) => {
        return <Todo todo={todo} todoIndex={todoIndex} delTodo={delTodo} />;
      })}
    </div>
  );
}

export default TodoContainer;
