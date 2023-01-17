import React,{ useState } from "react";

function TodoItem(props){
 const [task,setTask] = useState(true)

function handleClick(){

   setTask(task =>!task) 
}
    return (
        <div style={{border:"1px solid green"}}>
            <h2>{props.todo.title}</h2>
            <p>{props.todo.description}</p>
            <button onClick={handleClick}>{task ? "Completed":"Incomplete"}</button>
        </div>
    )
}

export default TodoItem