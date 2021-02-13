import React, { Component } from 'react';


function Todo({todo}) {
    return (
        <div>
            {console.log(todo)}
            {todo.task}
        </div>
    )
}

export default Todo;

