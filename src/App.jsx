import { useState } from "react";
import "./components/todo.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";
function App() {
  const [inp, setInp] = useState("");

  const [todos, setTodos] = useState([]);

  function writetodo(e) {
    setInp(e.target.value);
  }

  function addTodo() {
    if (inp != "") {
      setTodos((prevTodos) => [...prevTodos, inp]);
      setInp("");
    }
  }


  console.log(todos);

  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }

  return (
    <main>
      <h1>To-Do List</h1>
      <InputContainer inp={inp} writetodo={writetodo} addTodo={addTodo} />

      <TodoContainer todos={todos}  delTodo={delTodo} />
    </main>
  );
}

export default App;
