import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import './styles.css';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${API_URL}/todos`);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (text: string) => {
    try {
      const response = await axios.post(`${API_URL}/todos`, { text });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = async (id: number) => {
    const todo = todos.find(t => t.id === id);
    if (todo) {
      try {
        const response = await axios.put(`${API_URL}/todos/${id}`, { completed: !todo.completed });
        setTodos(todos.map(t => t.id === id ? response.data : t));
      } catch (error) {
        console.error('Error toggling todo:', error);
      }
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      setTodos(todos.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <Footer todos={todos} />
    </div>
  );
};

export default App;