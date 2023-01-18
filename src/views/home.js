import React, { useState, useEffect, useContext } from "react";
import TodoList from "../components/Todolist";
import axios from "axios";
import { TodoContext } from "../context/TodoContext";

function Home() {

  const [todos, setTodos] = useContext(TodoContext)

  // useEffect(() => {
  //   fetchTodos()
  // }, [])
  
  // function to fetch todos => GET => https://jsonplaceholder.typicode.com/todos
  // const fetchTodos = () => {
  //   axios.get(
  //     // process.env("REACT_APP_API_URL")
  //     "https://jsonplaceholder.typicode.com/todos"
  //   ).then((response) => {
  //     const fetchedTodos = response.data
  //     // setTodos([
  //     //   ...todos, fetchedTodos
  //     // ])
  //     setTodos(fetchedTodos)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }


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

      {todos.length > 0 ? (
        <>
          <TodoList todos={todos} />
        </>
      ) : (
        <p>No tasks</p>
      )}
      
    </div>
  );
}

export default Home;
