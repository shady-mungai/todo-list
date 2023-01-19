import React from "react";
import TodoItem from "./Todoitem";



function TodoList(props) {

  
  return (
    <div className="w-1/2 mx-auto border-l-[1rem] border-blue-300">
{    props.todos.map((item,index) => (
      <TodoItem key={index} todo={item}/>
  )) 
}
    </div>
);
}

export default TodoList