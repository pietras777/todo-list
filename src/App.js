import { useState, useEffect } from "react";

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

  const handleDoneTodo = (myTodo) => {
    const TODO_ID = myTodo.target.parentElement.id;
    todos.forEach((el) => {
      if (el === TODO_ID) {
        console.log("el ===", TODO_ID);
        const TODO_INDEX = todos.indexOf(TODO_ID);
        todos.splice(TODO_INDEX, 1);
      }
      // OLD
      // if (el === TODO_ID) {
      //   todos.splice(TODO_INDEX);
      //   console.log("todos ===", todos);
      // }
    });
  };

  return (
    <>
      <h1>Todo list</h1>
      <input type="text" onChange={(ev) => handleTodoValue(ev)} />
      <button onClick={handleAddTodo}>Add todo</button>
      {todos.map((el) => (
        <div key={el} id={el}>
          <h3>{el}</h3>
          <button onClick={handleDoneTodo}>Done</button>
        </div>
      ))}
    </>
  );
};

export default App;
