import { useState } from "react";
import './index.css'

export default function ToDoList(){
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');
    
    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updateTask = task.filter((_, idx) => idx !== index);
        setTask(updateTask);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updateTask = [...task];
            [updateTask[index], updateTask[index-1]] = [updateTask[index-1], updateTask[index]]
            setTask(updateTask);
        }
    }
    
    function moveTaskDown(index){
        if(index < task.length-1 ){
            const updateTask = [...task];
            [updateTask[index], updateTask[index+1]] = [updateTask[index+1], updateTask[index]]
            setTask(updateTask);
        }
    }

    return(
    <div className="to-do-list">
        <h1>TO-DO-LIST</h1>
        <div className="input-container">
            <input type="text" placeholder="Enter a Task..."
            value={newTask} onChange={handleInputChange}/>
            <button className="btn_add" onClick={addTask}>Add</button>
        </div>
        <ol>
            {task.map((tasks, idx) =>
                <li key={idx}>
                    <span className="text">{idx+1}. {tasks}</span>
                    <button className="btn_delete" onClick={() => deleteTask(idx)}>
                        Delete
                    </button>
                    <button className="btn_move" onClick={() => moveTaskUp(idx)}>
                        ⬆
                    </button>
                    <button className="btn_move" onClick={() => moveTaskDown(idx)}>
                        ⬇
                    </button>
                </li>
            )}
        </ol>
    </div>
    );
}