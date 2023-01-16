import React,{ useState } from "react";

function TodoItem(){
    const [todo ,setTodo] = useState({

        "title":"Learn React",
        "Description":"Introduction to React"
})
    return (
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.Description}</p>
        </div>
    )
}

export default TodoItem