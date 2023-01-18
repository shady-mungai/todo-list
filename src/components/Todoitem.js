import React,{ useState } from "react";

function TodoItem(props){
    return (
        <div style={{border:"1px solid green"}}>
            <h2>{props.todo.title}</h2>
        </div>
    )   
}

export default TodoItem