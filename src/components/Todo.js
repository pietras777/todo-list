import React from "react";
import todoStyles from "../css/todoStyles.css";

const Todo = (props) => {
  const { todo } = props;

  return (
    <>
      <div className="todo">
        <h3>{todo}</h3>
        <button className="done-btn">Done</button>
      </div>
    </>
  );
};

export default Todo;
