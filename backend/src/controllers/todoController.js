const Todo = require('../models/todoModel');

// Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a todo
const createTodo = async (req, res) => {
  try {
    const { text, completed } = req.body;
    const todo = new Todo({ text, completed });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a todo
const updateTodo = async (req, res) => {
  try {
    const { text, completed } = req.body;
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    if (text !== undefined) todo.text = text;
    if (completed !== undefined) todo.completed = completed;
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};