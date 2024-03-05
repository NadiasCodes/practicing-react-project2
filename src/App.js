import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    setToDoList([...toDoList, currentTask]);
    inputTask.current.value="";
    setCurrentTask=("");
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="form">
        <input
          ref={inputTask}
          type="text"
          placeholder="Task..."
          onChange={(event) => {
            setCurrentTask(event.target.value);
          }}
        />
        <button onClick={addTask}> Add Task</button>
      </div>
      <hr />
      <ul>
        {toDoList.map((val, key) => {
          return <li key={key}>{val}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
