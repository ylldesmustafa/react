import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/core";

function Todo({ todo, toggleComplete, removeTodo }) {
  function checkboxClick() {
    toggleComplete(todo.id);
  }

  function removeClick() {
    removeTodo(todo.id);
  }

  return (
   <ListItem style={{ display: "flex" }}>
    <Checkbox checked={todo.completed} onClick={checkboxClick} />
    <Typography
      variant="body1"
      style={{
        textDecoration: todo.completed ? "line-through" : null
      }}
    >
      {todo.task}
     </Typography>
     <IconButton onClick={removeClick}>
       <CloseIcon />
     </IconButton>
    </ListItem>
  );
}

export default Todo;