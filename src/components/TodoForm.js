import React, {useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField} from '@material-ui/core';

export const TodoForm = ({ addTodo }) => {
  const [ todo, setTodo ] = useState({
    id: '',
    task: '',
    completed: false
  });

  const hadleTaskInputChange = (e) => {
    setTodo({...todo, task: e.target.value})
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() })
      //reset task input
      setTodo({...todo, task: ''})
    }

  }
  
  return(
    <form className='todo-form' onSubmit={handleSubmit} >
      <TextField
        label='New Task'
        name='task'
        type='text'
        value={todo.task}
        onChange={hadleTaskInputChange}
      />
      <Button type='submit'>Submit</Button>
    </form>
  )
}