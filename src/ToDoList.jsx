import React,{useState} from "react";
function ToDoList() {
          const [tasks, setTasks] = useState(['take a shower', 'make a sound'])
          const [newTask, setNewTask] = useState('')    
          
          function handleInputChange(event) {
                    setNewTask(event.target.value)
          }

          function addTask() {
                    if (newTask.trim() !== "") {
                              setTasks(t => [...t, newTask])
                              setNewTask('')
                    }
          }

          function deleteTask(index) {
                    
          }

          function moveTaskUp(index) {
                    
          }

          
          function moveTaskDown(index) {
                     
          }


          return (
                    <div className="to-do-list">
                              <h1>To Do List</h1>
                              <div>
                                        <input
                                                  type="text"
                                                  placeholder="Enter a task"
                                                  value={newTask}
                                        onChange={handleInputChange}/>
                                        <button
                                                  className="add-button"
                                        onClick={addTask}
                                        >Add</button>

                                        <ol>
                                                  {
                                                            tasks.map((task, index) =>
                                                                      <li key={index}>
                                                                                <span className="text">{task}</span>
                                                                                <button
                                                                                          className="delete-button"
                                                                                          onClick={() => deleteTask(index)}
                                                                                >Delete</button>
                                                                                <button
                                                                                          className="move-button"
                                                                                          onClick={() => moveTaskUp(index)}
                                                                                >⬆️</button>
                                                                                 <button
                                                                                          className="move-button"
                                                                                          onClick={() => moveTaskDown(index)}
                                                                                >⬇️</button>
                                                           
                                                                      </li>)
                                                  }
                                        </ol>
                              </div>
                    </div>
          )

}
export default ToDoList;