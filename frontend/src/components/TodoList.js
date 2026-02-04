import React from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import TodoItem from './TodoItem';

function TodoList({ todos, loading, onUpdate, onDelete }) {
  if (loading) {
    return (
      <div className="text-center mt-4">
        <Spinner animation="border" />
      </div>
    );
  }

  if (todos.length === 0) {
    return <p className="text-center mt-4">No todos yet. Add one above!</p>;
  }

  return (
    <ListGroup>
      {todos.map(todo => (
        <TodoItem 
          key={todo._id} 
          todo={todo} 
          onUpdate={onUpdate} 
          onDelete={onDelete} 
        />
      ))}
    </ListGroup>
  );
}

export default TodoList;