import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    setToDoList([...toDoList, currentTask]);
    inputTask.current.value = "";
    setCurrentTask("");
  };

const deleteTask = (taskToDelete) => {
  let found = false;
  const newList = toDoList.filter((task) => {
    if (task !== taskToDelete || found) {
      return true;
    } else {
      found = true;
      return false;
    }
  });
  setToDoList(newList);
};





const completeTask = (taskToComplete) => {
  let found = false;
  const newList = toDoList.filter((task) => {
    if (task !== taskToComplete || found) {
      return true;
    } else {
      found = true;
      return false;
    }
  });
  setToDoList(newList);
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
          return (
            <div className="tasks">
              <li key={key}>{val}</li>
              <button onClick={() => completeTask(val)}>Complete</button>
              <button onClick={() => deleteTask(val)}>Remove</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
