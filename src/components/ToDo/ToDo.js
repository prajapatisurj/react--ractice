import React, { useState } from "react";
import "./ToDo.css";
const ToDo = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, task]);
    setTask("");
  };
  const handleDelete = (index) => {
    const newList = list.filter((ind) => ind !== index);
    setList(newList);
  };

  const editItem = (index, task) => {
    let newList = [...list];
    newList[index] = prompt("Edit Task", task);
    setList(newList);
  };
  return (
    <div className="main">
      <h1>To Do App</h1>
      <div className="input_btn">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Task</button>
      </div>
      <div className="list">
        <p>To Do list</p>
        {list.map((task, index) => (
          <li key={index}>
            {task}
            <div>
              <button onClick={() => handleDelete(index)} className="addBtn">
                Delete
              </button>
              <button onClick={() => editItem(index, task)} className="addBtn">
                Edit
              </button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
