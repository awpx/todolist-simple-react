import React from 'react';
import { Todo } from './Todo';
import { List } from '@material-ui/core';

export const TodoList = ({todos, toggleCompleted, removeTodo}) => {
  return (
    <List>
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
        )
      })}
    </List>
  )
}