import { useState, useEffect } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    console.log("todos ===", todos);
  }, [todos]);

  const handleTodoValue = (event) => {
    setTodoValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoValue.length > 0) {
      setTodos((prevArray) => [...prevArray, todoValue]);
    } else return;
  };

  return (
    <>
      <h1>Todo list</h1>
      <input type="text" onChange={(ev) => handleTodoValue(ev)} />
      <button onClick={handleAddTodo}>Add todo</button>
      {todos.map((el) => (
        <Todo key={el} todo={el} />
      ))}
    </>
  );
};

export default App;
