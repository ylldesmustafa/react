import React from "react";
import Todo from "./Todo";
import { List } from "@material-ui/core";

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    //<List>
    <div>
      {todos.map(todo => (
     <Todo 
        key={todo.id} 
            todo={todo} 
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          /> 
      ))}
    </div>
   // </List>
  );
}

export default TodoList;