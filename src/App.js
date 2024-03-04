import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const addTask = () => {
    setToDoList([...toDoList, currentTask]);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="form">
        <input
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
        <lil></lil>
      </ul>
    </div>
  );
}

export default App;
