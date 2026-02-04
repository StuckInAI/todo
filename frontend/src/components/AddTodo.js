import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

function AddTodo({ onTodoAdded }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, completed: false })
      });
      if (!response.ok) throw new Error('Failed to add todo');
      setText('');
      onTodoAdded();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Add a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        />
        <Button 
          variant="primary" 
          type="submit"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add'}
        </Button>
      </InputGroup>
    </Form>
  );
}

export default AddTodo;