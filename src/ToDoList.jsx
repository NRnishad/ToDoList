import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState(
    new Array(tasks.length).fill(false)
  );
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setCompletedTasks((prev) => [...prev, false]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index !== 0) {
      const updatedTasks = [...tasks];
      let temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;

      const updatedCompletedTasks = [...completedTasks];
      let tempCompleted = updatedCompletedTasks[index];
      updatedCompletedTasks[index] = updatedCompletedTasks[index - 1];
      updatedCompletedTasks[index - 1] = tempCompleted;

      setTasks(updatedTasks);
      setCompletedTasks(updatedCompletedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index !== tasks.length - 1) {
      const updatedTasks = [...tasks];
      let temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;

      const updatedCompletedTasks = [...completedTasks];
      let tempCompleted = updatedCompletedTasks[index];
      updatedCompletedTasks[index] = updatedCompletedTasks[index + 1];
      updatedCompletedTasks[index + 1] = tempCompleted;

      setTasks(updatedTasks);
      setCompletedTasks(updatedCompletedTasks);
    }
  }
  function toggleComplete(index) {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = !updatedCompletedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={completedTasks[index]}
                onChange={() => toggleComplete(index)}
                className="task-checkbox"
              />

              <span
                className="text"
                style={{
                  textDecoration: completedTasks[index]
                    ? "line-through"
                    : "none",
                }}
              >
                {task}
              </span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                ⬆️
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                ⬇️
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default ToDoList;
