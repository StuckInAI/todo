import React, { useState } from 'react';
import { ListGroup, Form, Button, InputGroup } from 'react-bootstrap';

function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/${todo._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !todo.completed })
      });
      if (!response.ok) throw new Error('Failed to update todo');
      onUpdate();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editText.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/${todo._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: editText })
      });
      if (!response.ok) throw new Error('Failed to update todo');
      setIsEditing(false);
      onUpdate();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/${todo._id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete todo');
      onDelete();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ListGroup.Item className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <Form.Check
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          disabled={loading}
          className="me-3"
        />
        {isEditing ? (
          <InputGroup>
            <Form.Control
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              disabled={loading}
            />
            <Button 
              variant="success" 
              size="sm" 
              onClick={handleSave}
              disabled={loading}
            >
              Save
            </Button>
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={() => {
                setIsEditing(false);
                setEditText(todo.text);
              }}
              disabled={loading}
            >
              Cancel
            </Button>
          </InputGroup>
        ) : (
          <span 
            style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer' 
            }}
            onClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
        )}
      </div>
      <Button 
        variant="danger" 
        size="sm" 
        onClick={handleDelete}
        disabled={loading}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
}

export default TodoItem;