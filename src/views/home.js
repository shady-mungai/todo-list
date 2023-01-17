import React, { useState } from "react";
import TodoList from "../myComponent/Todolist";

function Home() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Introduction to React",
      status:false
    },
    {
      id: 2,
      title: "Learn React",
      description: "Introduction to React",
      status:false
    },
  ]);

  // new todo state
  const [newTodo,setNewTodo] = useState("")

  // handle input change
  const handleChange = (e)=>{
    setNewTodo(e.target.value)
  }

  // function to add a new todo
  const handleSubmit = (e)=>{
    e.preventDefault()
    const newTask = {
      id: Math.floor(Math.random()*10),
      title: newTodo,
      description: "Introduction to React",
      status:false
    }
    setTodos([...todos,newTask])
  }

  return (
    <div>

      <h1>{newTodo}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="newTodo" value={newTodo} type="text" placeholder="Enter new todo"/>
        <button type="submit">Submit todo</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
}

export default Home;
