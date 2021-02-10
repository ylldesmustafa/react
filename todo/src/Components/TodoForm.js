import React from "react"; 

function TodoForm() {
  const [todo, setToDo] = useState({
    id: "",
    task: "",
    completed: false
  });

function taskInputChange(e) {
  setToDo({...todo, task: e.target.value });
}


  return 
  <form>
    <input />
    <button />
  </form>
}

export default TodoForm; 