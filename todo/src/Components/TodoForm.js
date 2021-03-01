
import React, { useState } from "react"; 
import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@material-ui/core";

function TodoForm({ addTodo }) {
  const [todo, setToDo] = useState({
    id: "",
    task: "", 
    completed: false
  });

function taskInputChange(e) {
  setToDo({...todo, task: e.target.value });
}

function submitChange(e) {
  e.preventDefault();
  if (todo.task.trim()) {
    addTodo({ ...todo, id: uuidv4() });
    setToDo({ ...todo, task: "" });
}
}
  return (
  <form className="todo-form" onSubmit={submitChange}>
    <TextField 
    label="Task"
    name="task"
    type="text"
    value={todo.task}
    onChange={taskInputChange} 
    />
    <Button type="submit">Submit</Button>
  </form>
  );
}

export default TodoForm; 