import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export const Todo = ({ todo, toggleCompleted, removeTodo }) => {

  const handleCheckbox = () => {
    toggleCompleted(todo.id)
  }

  const handleRemove = () => {
    removeTodo(todo.id)
  }

  return(
    <ListItem style={{display: 'flex'}} >
      <Checkbox checked={todo.completed} onClick={handleCheckbox} />
      <Typography
        variant='body1'
        style={{
          textDecoration: todo.completed ? 'line-through' : null
        }}
      > { todo.task } 
      </Typography>
      <IconButton onClick={handleRemove} > <CloseIcon /> </IconButton>
    </ListItem>
  )
}