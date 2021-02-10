// import logo from './logo.svg';
import { useState } from 'react';
import "./App.css";
import TodoForm from "./Components/TodoForm";

function App() {

  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo,...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
       <p>To Do List</p>
       <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;
