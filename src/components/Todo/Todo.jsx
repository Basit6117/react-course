import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './todo.css'

const Todo = () => {
    const [todos, setTodos] = useState([{ task: "Namaz", id: uuidv4(),isDone: false }]);
    const [newTasks, setNewTasks] = useState([""]);
    function handleClick() {
        setTodos((prevTodo) => {
            return [...prevTodo, { task: newTasks, id: uuidv4(),isDone: false }];
        });
        setNewTasks('');
    }
    function handleChange(e) {
        setNewTasks(e.target.value);
    }
    function handleDelete(id) {
        setTodos((prevTask) => prevTask.filter((prevTask) => prevTask.id != id));
    }
    let markAll = ()=>{
 setTodos((prve)=>(
    prve.map((todo)=>{
        return {
            ...todo,
            isDone: true
        }
        })));
        // console.log(newarr);
    }
function handleTik(id){
  setTodos((prve)=>(
    prve.map((todo)=>{
         if(todo.id === id){
        return {
            ...todo,
            isDone: true
         } }else{
            return todo;
         }
        })
    
    ))
    console.log(isDone);
}
    return (
        <div className="tasks">
            <h1>To-Do App</h1>
            <input
                type="text"
                placeholder="Add Tasks"
                onChange={handleChange}
                value={newTasks}
            />
            <button onClick={handleClick}>Add Task</button>
            <ul>
                {todos.map((todo) => (
                 
                 <li className="tasks-list" key={todo.id}>
                   <span className={todo.isDone && 'LineThrough'}>{todo.task}</span>
                        &nbsp; &nbsp;
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        <button onClick={()=>handleTik(todo.id)}>✅</button>
                    </li>
                ))}
            </ul>
            <button onClick={markAll}>Done All</button>
        </div>
    );
};

export default Todo;
