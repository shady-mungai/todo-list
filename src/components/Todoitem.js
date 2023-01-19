import React,{ useState } from "react";

function TodoItem(props){
    return (
        <div className="shadow-md h-[4rem] flex items-center p-2">
            <h2 className="text-2xl font-extralight">{props.todo.title}</h2>
        </div>
    )   
}

export default TodoItem