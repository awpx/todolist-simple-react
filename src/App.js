import React, { useState, useEffect } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import Typography from '@material-ui/core/Typography';

const LOCAL_STORAGE_KEY = 'TodoList-todos';

function App() {
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed
          }
        };
        return todo;
      })
    )
  };

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant='h1' >Todo List</Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
